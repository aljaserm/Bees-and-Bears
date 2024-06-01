from rest_framework import generics
from rest_framework.exceptions import ValidationError
from api.models.customer import Customer
from api.serializers import CustomerSerializer


class CustomerCreateView(generics.CreateAPIView):
    """
    post:
    Create a new customer.

    Request Body:
    {
        "name": "string",
        "email": "string"
    }

    Responses:
        201: Customer created successfully.
        400: Bad request.
    """
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

    def perform_create(self, serializer):
        try:
            serializer.save()
        except ValidationError as e:
            raise ValidationError({'detail': str(e)})