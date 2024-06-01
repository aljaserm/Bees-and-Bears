from rest_framework.test import APITestCase
from rest_framework import status
from api.models.customer import Customer


class CustomerTestCase(APITestCase):
    """
    Test suite for the Customer API endpoints.
    """

    def setUp(self):
        """
        Create a sample customer for testing.
        """
        self.valid_customer_data = {
            'first_name': 'John',
            'last_name': 'Doe',
            'email': 'john.doe@example.com'
        }
        self.invalid_customer_data_name = {
            'first_name': 'John123',
            'last_name': 'Doe456',
            'email': 'john.doe@example.com'
        }
        self.invalid_customer_data_email = {
            'first_name': 'John',
            'last_name': 'Doe',
            'email': 'invalid-email'
        }
        self.empty_customer_data = {
            'first_name': '',
            'last_name': '',
            'email': ''
        }
        self.invalid_customer_data_empty = {
            "first_name": "",
            "last_name": "",
            "email": ""
        }
        self.invalid_customer_data_whitespace = {
            "first_name": "   ",
            "last_name": "   ",
            "email": "   "
        }

    def test_create_valid_customer(self):
        """
        Ensure we can create a customer with valid data.
        """
        response = self.client.post('/api/customers/', self.valid_customer_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_create_customer_invalid_empty_data(self):
        response = self.client.post('/api/customers/', self.invalid_customer_data_empty, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data['message'], 'Please correct the following validation errors and try again.')

    def test_create_customer_invalid_whitespace_data(self):
        response = self.client.post('/api/customers/', self.invalid_customer_data_whitespace, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data['message'], 'Please correct the following validation errors and try again.')

    def test_create_customer_invalid_name(self):
        """
        Ensure we cannot create a customer with a name containing numbers.
        """
        response = self.client.post('/api/customers/', self.invalid_customer_data_name, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_create_customer_invalid_email(self):
        """
        Ensure we cannot create a customer with an invalid email.
        """
        response = self.client.post('/api/customers/', self.invalid_customer_data_email, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_create_customer_empty_data(self):
        """
        Ensure we cannot create a customer with empty fields.
        """
        response = self.client.post('/api/customers/', self.empty_customer_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
