from rest_framework import serializers
from api.models.loan_offer import LoanOffer


class LoanOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoanOffer
        fields = '__all__'

    def validate_loan_amount(self, value):
        """
        Validate that the loan amount is positive.
        """
        if value <= 0:
            raise serializers.ValidationError("Loan amount must be positive.")
        return value

    def validate_interest_rate(self, value):
        """
        Validate that the interest rate is positive.
        """
        if value <= 0:
            raise serializers.ValidationError("Interest rate must be positive.")
        return value

    def validate_loan_term(self, value):
        """
        Validate that the loan term is positive.
        """
        if value <= 0:
            raise serializers.ValidationError("Loan term must be positive.")
        return value
