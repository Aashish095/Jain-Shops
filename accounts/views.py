from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.forms import inlineformset_factory
from django.contrib.auth.forms import UserCreationForm
from django.utils.decorators import method_decorator
from rest_framework import generics, status
from django.contrib.auth import authenticate, login, logout
from rest_framework.generics import RetrieveAPIView, CreateAPIView, DestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib import messages
from django.contrib.auth.views import LogoutView
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import Group
import logging
from rest_framework.decorators import api_view
from rest_framework.views import APIView

from serializer import CustomerSerializer, OrderSerializer, ProductSerializer

logging.basicConfig(level=logging.INFO)

# Create your views here.
from models import *
from forms import OrderForm, CreateUserForm, CustomerForm
from filters import OrderFilter
from decorators import unauthenticated_user, allowed_users, admin_only
from rest_framework.exceptions import AuthenticationFailed


# Applying the unauthenticated_user decorator to the view and defining the allowed method
# Defining the class-based view
class RegisterPageAPI(APIView):
    # Applying the unauthenticated_user decorator to the class and defining the allowed method
    @unauthenticated_user
    def post(self, request):
        # Creating a serializer object using the incoming request data
        serializer = CustomerSerializer(data=request.data)

        # Checking if the data is valid according to the serializer
        if serializer.is_valid():
            # Saving the serializer data and creating the user
            user = serializer.save()

            # Retrieving the username from the saved serializer data
            username = serializer.data.get('username')

            # Creating a success message
            message = 'Account was created for ' + username

            # Returning the success message with 201 status
            return Response({'message': message}, status=status.HTTP_201_CREATED)

        # If data is not valid, returning the error message with 400 status
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Defining the class-based view
class CreateCustomerAPI(APIView):
    # Applying the allowed_users and login_required decorators to the class and defining the allowed method
    @login_required(login_url='login')
    @allowed_users(allowed_roles=['admin'])
    def post(self, request):
        # Creating a CustomerSerializer object with the incoming request data
        serializer = CustomerSerializer(data=request.data)
        # Checking if the data is valid according to the serializer
        if serializer.is_valid():
            # Saving the serializer data and creating the user
            user = serializer.save()
            # Retrieving the username from the saved serializer data and creating a success message
            username = serializer.data.get('username')
            message = 'Account was created for ' + username
            # Returning the success message with 201 status
            return Response({'message': message}, status=status.HTTP_201_CREATED)
        # If data is not valid, returning the error message with 400 status
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginAPIView(APIView):
    def post(self, request):
        # Retrieve username and password from the incoming request data
        username = request.data.get('username')
        password = request.data.get('password')

        # Authenticate user credentials
        user = authenticate(request, username=username, password=password)

        # If the credentials are valid, log the user in and return a success message
        if user is not None:
            login(request, user)
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        # If the credentials are not valid, raise an AuthenticationFailed exception
        else:
            raise AuthenticationFailed('Username or password is incorrect')


@method_decorator(login_required, name='dispatch')
class LogoutAPIView(LogoutView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        # Log the user out
        logout(request)

        # Return a success message with a status of 200 OK
        return Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)


@login_required(login_url='login')
@admin_only
class HomeAPIView(APIView):
    def get(self,request):
        # Fetching all orders and customers from the database
        orders = Order.objects.all()
        customers = Customer.objects.all()

        # Counting the total number of customers and orders
        total_customers = customers.count()
        total_orders = orders.count()

        # Counting the number of delivered and pending orders
        delivered = orders.filter(status='Delivered').count()
        pending = orders.filter(status='Pending').count()

        # Serializing the orders and customers objects
        orders_serializer = OrderSerializer(orders, many=True)
        customers_serializer = CustomerSerializer(customers, many=True)

        # Creating a context object to be used in the template
        context = {'orders': orders_serializer.data, 'customers': customers_serializer.data,
                   'total_orders': total_orders, 'delivered': delivered,
                   'pending': pending}

        # Returning the context object with a 200 status code
        return Response(context, status=status.HTTP_200_OK)


# Decorator that checks if the user is logged in and redirects to the login page if not
@login_required(login_url='login')
# Decorator that checks if the user has the 'customer' role
@allowed_users(allowed_roles=['customer'])
# Class-based view for the user page
class UserPageAPIView(APIView):

    # GET method for retrieving the user's orders and status counts
    def get(self, request):
        # Retrieving all orders of the current user
        orders = request.user.customer.order_set.all()

        # Counting total orders, delivered orders and pending orders
        total_orders = orders.count()
        delivered = orders.filter(status='Delivered').count()
        pending = orders.filter(status='Pending').count()

        # Creating a serializer object using the order data
        orders_serializer = OrderSerializer(orders, many=True)

        # Creating a context dictionary to pass to the response
        context = {
            'orders': orders_serializer.data,
            'total_orders': total_orders,
            'delivered': delivered,
            'pending': pending
        }

        # Returning the context with a 200 status code
        return Response(context, status=status.HTTP_200_OK)


# Required authentication decorators for the view
@login_required(login_url='login')
@allowed_users(allowed_roles=['customer'])
class AccountSettingsAPIView(APIView):
    # GET method to retrieve customer account details
    def get(self, request):
        # Fetching the Customer object of the authenticated user
        customer = request.user.customer
        # Serializing the Customer object
        serializer = CustomerSerializer(customer)
        # Returning the serialized data with 200 status code
        return Response(serializer.data, status=status.HTTP_200_OK)

    # PUT method to update customer account details
    def put(self, request):
        # Fetching the Customer object of the authenticated user
        customer = request.user.customer
        # Serializing the Customer object with the incoming request data
        serializer = CustomerSerializer(customer, data=request.data)
        # Checking if the serializer data is valid
        if serializer.is_valid():
            # Saving the serializer data
            serializer.save()
            # Returning the updated serialized data with 200 status code
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            # Returning the error message with 400 status code
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@login_required(login_url='login')
@allowed_users(allowed_roles=['admin', 'customer'])
class ProductAPIView(APIView):
    def get(self,request):
        # Retrieve all products from the database
        products = Product.objects.all()

        # Serialize the products queryset
        serializer = ProductSerializer(products,many=True)

        # Return the serialized data with 200 status code
        return Response(serializer.data,status=status.HTTP_200_OK)


# Add login and role-based permission decorators to this view
@login_required(login_url='login')
@allowed_users(allowed_roles=['admin'])

# Define a custom view class that extends RetrieveAPIView
class CustomerAPIView(RetrieveAPIView):
    # Set the queryset to retrieve all Customer objects
    queryset = Customer.objects.all()
    # Use the CustomerSerializer to serialize the Customer objects
    serializer_class = CustomerSerializer

    # Define a custom retrieve method to return Customer and Order data for a single Customer
    def retrieve(self, request, *args, **kwargs):
        # Get the Customer object to retrieve data for
        instance = self.get_object()
        # Get the Order objects for this Customer
        orders = Order.objects.filter(customer=instance)
        # Serialize the Order objects using the OrderSerializer
        serializer = OrderSerializer(orders, many=True)
        # Serialize the Customer object using the CustomerSerializer
        customer_serializer = self.get_serializer(instance)
        # Return a Response object containing Customer and Order data, as well as an order count
        return Response({
            'customer': customer_serializer.data,
            'orders': serializer.data,
            'order_count': orders.count(),
        })


@login_required(login_url='login')  # decorator to require login for access
@allowed_users(allowed_roles=['admin'])  # decorator to limit access to users with 'admin' role
class CreateOrderAPIView(APIView):
    def post(self, request, pk):  # handles POST requests to create new order
        # retrieves the customer with the given primary key (pk) from the database
        customer = Customer.objects.get(id=pk)
        # creates a new instance of OrderSerializer with the request data
        order_serializer = OrderSerializer(data=request.data)
        if order_serializer.is_valid():  # checks if the data is valid
            # saves the new order with the retrieved customer as the foreign key
            order = order_serializer.save(customer=customer)
            # returns the serialized data of the newly created order with a 201 status code
            return Response(OrderSerializer(order).data, status=status.HTTP_201_CREATED)
        # returns any errors that occurred during validation with a 400 status code
        return Response(order_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, pk):  # handles GET requests to retrieve existing orders for a customer
        # retrieves the customer with the given primary key (pk) from the database
        customer = Customer.objects.get(id=pk)
        # retrieves all orders that belong to the retrieved customer
        orders = customer.orders.all()
        # serializes the orders queryset and returns it with a 200 status code
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)

    def put(self, request, pk):  # handles PUT requests to update existing orders for a customer
        # retrieves the customer with the given primary key (pk) from the database
        customer = Customer.objects.get(id=pk)
        # retrieves all orders that belong to the retrieved customer
        orders = customer.orders.all()
        # creates a new instance of OrderSerializer with the request data and existing orders queryset
        order_serializer = OrderSerializer(orders, data=request.data, many=True)
        if order_serializer.is_valid():  # checks if the data is valid
            # saves the updated order data
            order_serializer.save()
            # returns the serialized data of the updated orders with a 200 status code
            return Response(order_serializer.data)
        # returns any errors that occurred during validation with a 400 status code
        return Response(order_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):  # handles DELETE requests to delete all orders for a customer
        # retrieves the customer with the given primary key (pk) from the database
        customer = Customer.objects.get(id=pk)
        # retrieves all orders that belong to the retrieved customer
        orders = customer.orders.all()
        orders.delete()  # deletes all orders
        # returns a 204 status code to indicate successful deletion with no content returned
        return Response(status=status.HTTP_204_NO_CONTENT)



# Use the @login_required decorator to require login before accessing the view
# Use the @allowed_users decorator to specify which users can access the view
@login_required(login_url='login')
@allowed_users(allowed_roles=['customer', 'admin'])
class CreateOrderUserAPIView(CreateAPIView):
    # Use the OrderSerializer to serialize and deserialize Order objects
    serializer_class = OrderSerializer
    # Use the IsAuthenticated permission class to require that the user is authenticated
    permission_classes = (IsAuthenticated,)

    # Define a method to get the customer associated with the request
    def get_customer(self):
        customer_id = self.kwargs.get('pk1')
        return Customer.objects.get(id=customer_id)

    # Define a method to get the serializer context
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context.update({
            'customer': self.get_customer()
        })
        return context


@login_required(login_url='login')     # Decorator to ensure user is logged in, redirects to login page if not
@allowed_users(allowed_roles=['admin'])     # Decorator to ensure user has 'admin' role, denies access if not
class OrderAPIView(APIView):

    def get_object(self, pk):
        try:
            return Order.objects.get(id=pk)     # Tries to get the order object with the given ID
        except Order.DoesNotExist:
            return None     # If order does not exist, returns None

    def get(self, request, pk):
        order = self.get_object(pk)     # Gets the order object with the given ID
        if order:
            serializer = OrderSerializer(order)     # Serializes the order object
            return Response(serializer.data)     # Returns the serialized order data
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)     # If order does not exist, returns 404 Not Found status

    def put(self, request, pk):
        order = self.get_object(pk)     # Gets the order object with the given ID
        if order:
            serializer = OrderSerializer(order, data=request.data)     # Serializes the order object with the new data from the request
            if serializer.is_valid():
                serializer.save()     # If the serializer is valid, saves the order object with the new data
                return Response(serializer.data)     # Returns the serialized order data
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)     # If serializer is not valid, returns 400 Bad Request status with errors
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)     # If order does not exist, returns 404 Not Found status



@login_required(login_url='login')
@allowed_users(allowed_roles=['admin'])
class OrderDestroyAPIView(DestroyAPIView):

    # set the queryset for this view to retrieve all Order objects
    queryset = Order.objects.all()

    # set the serializer class to use for serializing and deserializing Order objects
    serializer_class = OrderSerializer

    # the name of the URL keyword argument to use when looking up the Order object to delete
    lookup_url_kwarg = 'pk'

    # override the default delete method to customize the response
    def delete(self, request, *args, **kwargs):

        # call the parent class's delete method to actually delete the object
        response = super().delete(request, *args, **kwargs)

        # check if the object was successfully deleted
        if response.status_code == status.HTTP_204_NO_CONTENT:

            # if the object was successfully deleted, return a success message with status 204
            return Response({'message': 'Order deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)

        # if the object was not deleted for some reason, return the original response from the parent class
        else:
            return response



class MainPageAPIView(APIView):

    def get(self, request):
        # Returns a welcome message for the main page
        return Response({'message': 'Welcome to the main page!'})



#######################################################################################################################################################3
@unauthenticated_user
def registerPage(request):
    form = CreateUserForm()
    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            user = form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, 'Account was created for ' + username)
            return redirect('login')

    context = {'form': form}
    return render(request, 'accounts/register.html', context)


@login_required(login_url='login')
@allowed_users(allowed_roles=['admin'])
def createCustomer(request):
    form = CreateUserForm()
    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            user = form.save()
            return redirect('dashboard')

    context = {'form': form}
    return render(request, 'accounts/create_customer.html', context)


@unauthenticated_user
def loginPage(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('dashboard')
        else:
            messages.info(request, 'Username OR password is incorrect')

    context = {}
    return render(request, 'accounts/login.html', context)


def logoutUser(request):
    logout(request)
    return redirect('/')


@login_required(login_url='login')
@admin_only
def home(request):
    orders = Order.objects.all()
    customers = Customer.objects.all()

    total_customers = customers.count()

    total_orders = orders.count()
    delivered = orders.filter(status='Delivered').count()
    pending = orders.filter(status='Pending').count()

    context = {'orders': orders, 'customers': customers,
               'total_orders': total_orders, 'delivered': delivered,
               'pending': pending}

    return render(request, 'accounts/dashboard.html', context)


@login_required(login_url='login')
@allowed_users(allowed_roles=['customer'])
def userPage(request):
    orders = request.user.customer.order_set.all()

    total_orders = orders.count()
    delivered = orders.filter(status='Delivered').count()
    pending = orders.filter(status='Pending').count()

    print('ORDERS:', orders)

    context = {'orders': orders, 'total_orders': total_orders,
               'delivered': delivered, 'pending': pending}
    return render(request, 'accounts/user.html', context)


@login_required(login_url='login')
@allowed_users(allowed_roles=['customer'])
def accountSettings(request):
    customer = request.user.customer
    form = CustomerForm(instance=customer)

    if request.method == 'POST':
        form = CustomerForm(request.POST, request.FILES, instance=customer)
        if form.is_valid():
            form.save()

    context = {'form': form}
    return render(request, 'accounts/account_settings.html', context)


@login_required(login_url='login')
@allowed_users(allowed_roles=['admin', 'customer'])
def products(request):
    products = Product.objects.all()

    return render(request, 'accounts/products.html', {'products': products})


@login_required(login_url='login')
@allowed_users(allowed_roles=['admin'])
def customer(request, pk_test):
    customer = Customer.objects.get(id=pk_test)

    orders = customer.order_set.all()
    order_count = orders.count()

    myFilter = OrderFilter(request.GET, queryset=orders)
    orders = myFilter.qs

    context = {'customer': customer, 'orders': orders, 'order_count': order_count,
               'myFilter': myFilter}
    return render(request, 'accounts/customer.html', context)


@login_required(login_url='login')
@allowed_users(allowed_roles=['admin'])
def createOrder(request, pk):
    OrderFormSet = inlineformset_factory(Customer, Order, fields=('product', 'status'), extra=10)
    customer = Customer.objects.get(id=pk)
    formset = OrderFormSet(queryset=Order.objects.none(), instance=customer)
    if request.method == 'POST':
        # print('Printing POST:', request.POST)
        form = OrderForm(request.POST)
        formset = OrderFormSet(request.POST, instance=customer)
        if formset.is_valid():
            formset.save()
            return redirect('dashboard')

    context = {'form': formset}
    return render(request, 'accounts/order_form.html', context)


@login_required(login_url='login')
@allowed_users(allowed_roles=['customer', 'admin'])
def createOrderUser(request, pk1):
    logging.info("start creation" + str(request))
    OrderFormSet = inlineformset_factory(Customer, Order, fields=('product', 'note',), extra=10)
    logging.info(pk1)
    customer = Customer.objects.get(id=pk1)
    formset = OrderFormSet(queryset=Order.objects.none(), instance=customer)
    if request.method == 'POST':
        # print('Printing POST:', request.POST)
        form = OrderForm(request.POST)
        formset = OrderFormSet(request.POST, instance=customer)
        if formset.is_valid():
            formset.save()
            return redirect('dashboard')

    context = {'form': formset}
    return render(request, 'accounts/order_form.html', context)


@login_required(login_url='login')
@allowed_users(allowed_roles=['admin'])
def updateOrder(request, pk):
    order = Order.objects.get(id=pk)
    form = OrderForm(instance=order)
    print('ORDER:', order)
    if request.method == 'POST':

        form = OrderForm(request.POST, instance=order)
        if form.is_valid():
            form.save()
            return redirect('dashboard')

    context = {'form': form}
    return render(request, 'accounts/order_form.html', context)


@login_required(login_url='login')
@allowed_users(allowed_roles=['admin'])
def deleteOrder(request, pk):
    order = Order.objects.get(id=pk)
    if request.method == "POST":
        order.delete()
        return redirect('dashboard')

    context = {'item': order}
    return render(request, 'accounts/delete.html', context)


def mainPage(request):
    context = {}
    return render(request, 'accounts/main-page.html', context)
