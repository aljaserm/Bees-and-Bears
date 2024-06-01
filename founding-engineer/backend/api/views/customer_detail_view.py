from rest_framework import generics
from rest_framework.exceptions import NotFound
from api.models import Customer
from api.serializers.customer_serializer import CustomerSerializer


class CustomerDetailView(generics.RetrieveAPIView):
    """
    get:
    Retrieve details of a customer by ID.

    Parameters:
        - id: Customer ID

    Responses:
        200: Customer details retrieved successfully.
        404: Customer not found.
    """
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

    def get_object(self):
        try:
            return super().get_object()
        except Customer.DoesNotExist:
            raise NotFound("Customer not found")
