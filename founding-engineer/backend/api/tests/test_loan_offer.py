from rest_framework.test import APITestCase
from rest_framework.test import APIClient
from rest_framework import status
from api.models.customer import Customer


class LoanOfferTestCase(APITestCase):
    """
    Test suite for the LoanOffer API endpoints.
    """

    def setUp(self):
        """
        Create sample data for testing loan offers.
        """
        self.client = APIClient()
        self.customer = Customer.objects.create(first_name="John", last_name="Doe", email="john.doe@example.com")
        self.valid_loan_offer_data = {
            "customer": self.customer.id,
            "loan_amount": 1000.0,
            "interest_rate": 5.0,
            "loan_term": 12
        }
        self.invalid_loan_offer_data_negative = {
            "customer": self.customer.id,
            "loan_amount": -1000.0,
            "interest_rate": -5.0,
            "loan_term": -12
        }
        self.invalid_loan_offer_data_zero = {
            "customer": self.customer.id,
            "loan_amount": 0,
            "interest_rate": 0,
            "loan_term": 0
        }

    def test_create_valid_loan_offer(self):
        """
        Ensure we can create a loan offer with valid data.
        """
        response = self.client.post('/api/loanoffers/', self.valid_loan_offer_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_create_loan_offer_negative_values(self):
        """
        Ensure we cannot create a loan offer with negative values.
        """
        response = self.client.post('/api/loanoffers/', self.invalid_loan_offer_data_negative, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_create_loan_offer_zero_values(self):
        """
        Ensure we cannot create a loan offer with zero values.
        """
        response = self.client.post('/api/loanoffers/', self.invalid_loan_offer_data_zero, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)