from django.urls import path

from django.contrib.auth import views as auth_views

from . import views

urlpatterns = [
    path('register/', views.registerPage, name="register"),
    path('login/', views.loginPage, name="login"),
    path('logout/', views.logoutUser, name="logout"),

    path('', views.mainPage, name="home"),
    path('user/', views.userPage, name="user-page"),

    path('account/', views.accountSettings, name="account"),

    path('products/', views.products, name='products'),
    path('customer/<str:pk_test>/', views.customer, name="customer"),

    path('create_order/<str:pk>/', views.createOrder, name="create_order"),
    path('update_order/<str:pk>/', views.updateOrder, name="update_order"),
    path('delete_order/<str:pk>/', views.deleteOrder, name="delete_order"),

    path('reset_password/',
         auth_views.PasswordResetView.as_view(template_name="accounts/password_reset.html"),
         name="reset_password"),

    path('reset_password_sent/',
         auth_views.PasswordResetDoneView.as_view(template_name="accounts/password_reset_sent.html"),
         name="password_reset_done"),

    path('reset/<uidb64>/<token>/',
         auth_views.PasswordResetConfirmView.as_view(template_name="accounts/password_reset_form.html"),
         name="password_reset_confirm"),

    path('reset_password_complete/',
         auth_views.PasswordResetCompleteView.as_view(template_name="accounts/password_reset_done.html"),
         name="password_reset_complete"),
    path('dashboardApi/', views.home, name="dashboard"),
    path('createApi/<str:pk1>/', views.createOrderUser, name="create"),
    path('create_customerApi/', views.createCustomer, name="create_customer"),

    path('registerApi/', views.registerPage, name="register"),
    path('loginApi/', views.loginPage, name="login"),
    path('logoutApi/', views.logoutUser, name="logout"),

    path('', views.mainPageApi, name="home"),
    path('userApi/', views.userPageApi, name="user-page"),

    path('accountApi/', views.accountSettingsApi, name="account"),

    path('productsApi/', views.productsApi, name='products'),
    path('customerApi/<str:pk_test>/', views.customerApi, name="customer"),

    path('create_orderApi/<str:pk>/', views.createOrderApi, name="create_order"),
    path('update_orderApi/<str:pk>/', views.updateOrderApi, name="update_order"),
    path('delete_orderApi/<str:pk>/', views.deleteOrderApi, name="delete_order"),

    path('reset_passwordApi/',
         auth_views.PasswordResetViewApi.as_view(template_name="accounts/password_reset.html"),
         name="reset_password"),

    path('reset_password_sentApi/',
         auth_views.PasswordResetDoneViewApi.as_view(template_name="accounts/password_reset_sent.html"),
         name="password_reset_done"),

    path('reset/<uidb64>/<token>/',
         auth_views.PasswordResetConfirmViewApi.as_view(template_name="accounts/password_reset_form.html"),
         name="password_reset_confirm"),

    path('reset_password_completeApi/',
         auth_views.PasswordResetCompleteViewApi.as_view(template_name="accounts/password_reset_done.html"),
         name="password_reset_complete"),
    path('dashboardApi/', views.homeApi, name="dashboard"),
    path('createApi/<str:pk1>/', views.createOrderUserApi, name="create"),
    path('create_customerApi/', views.createCustomerApi, name="create_customer"),
]

'''
1 - Submit email form                         //PasswordResetView.as_view()
2 - Email sent success message                //PasswordResetDoneView.as_view()
3 - Link to password Rest form in email       //PasswordResetConfirmView.as_view()
4 - Password successfully changed message     //PasswordResetCompleteView.as_view()
'''
