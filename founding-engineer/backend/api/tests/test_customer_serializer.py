from django.test import TestCase
from api.models.customer import Customer
from api.serializers.customer_serializer import CustomerSerializer

class TestCustomerSerializer(TestCase):
    def test_valid_customer_serialization(self):
        customer = Customer(first_name="John", last_name="Doe", email="john.doe@example.com")
        serializer = CustomerSerializer(customer)
        self.assertEqual(serializer.data['first_name'], 'John')
        self.assertEqual(serializer.data['last_name'], 'Doe')
        self.assertEqual(serializer.data['email'], 'john.doe@example.com')

    def test_invalid_customer_serialization(self):
        invalid_data = {"first_name": "", "last_name": "Doe", "email": "invalid-email"}
        serializer = CustomerSerializer(data=invalid_data)
        self.assertFalse(serializer.is_valid())
        self.assertEqual(set(serializer.errors.keys()), set(['first_name', 'email']))
