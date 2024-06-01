from rest_framework import generics
from rest_framework.exceptions import ValidationError
from api.models import LoanOffer
from api.serializers.loan_offer_serializer import LoanOfferSerializer


class LoanOfferCreateView(generics.CreateAPIView):
    """
    post:
    Create a new loan offer for a customer.

    Request Body:
    {
        "customer": "integer (Customer ID)",
        "loan_amount": "decimal",
        "interest_rate": "decimal",
        "loan_term": "integer"
    }

    Responses:
        201: Loan offer created successfully.
        400: Bad request.
    """
    queryset = LoanOffer.objects.all()
    serializer_class = LoanOfferSerializer

    def perform_create(self, serializer):
        try:
            serializer.save()
        except ValidationError as e:
            raise ValidationError({'detail': str(e)})
