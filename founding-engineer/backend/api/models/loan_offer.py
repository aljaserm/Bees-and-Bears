from django.core.exceptions import ValidationError
from django.db import models
from .customer import Customer


class LoanOffer(models.Model):
    """
    LoanOffer model definition.
    LoanOffer model representing a loan offer for a customer.
    """
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    loan_amount = models.DecimalField(max_digits=10, decimal_places=2)
    interest_rate = models.DecimalField(max_digits=5, decimal_places=2)
    loan_term = models.IntegerField()  # in months

    @property
    def monthly_payment(self):
        """
        Calculate the monthly payment using the loan amortization formula.
        """
        rate = self.interest_rate / 100 / 12
        n = self.loan_term
        return self.loan_amount * rate / (1 - (1 + rate) ** -n)

    def clean(self):
        if self.loan_amount <= 0:
            raise ValidationError('Loan amount must be positive')
        if self.interest_rate <= 0:
            raise ValidationError('Interest rate must be positive')
        if self.loan_term <= 0:
            raise ValidationError('Loan term must be positive')

    def save(self, *args, **kwargs):
        self.clean()
        super().save(*args, **kwargs)