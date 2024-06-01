"""
Django admin module for the API app.
"""

from django.contrib import admin
from .models.customer import Customer
from .models.loan_offer import LoanOffer

# Register models to the admin site
admin.site.register(Customer)
admin.site.register(LoanOffer)