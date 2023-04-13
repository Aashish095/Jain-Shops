from rest_framework import serializers
from django.contrib.auth.models import User

from accounts.models import Customer, Order, Product


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['name', 'phone', 'email', 'profile_pic']

    def create(self, validated_data):
        user = self.context['request'].user
        customer = Customer.objects.create(user=user, **validated_data)
        return customer


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
