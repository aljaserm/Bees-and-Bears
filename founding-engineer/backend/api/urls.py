from django.urls import path
from api.views.customer_create_view import CustomerCreateView
from api.views.customer_detail_view import CustomerDetailView
from api.views.loan_offer_create_view import LoanOfferCreateView

urlpatterns = [
    path('customers/', CustomerCreateView.as_view(), name='create-customer'),
    path('customers/<int:pk>/', CustomerDetailView.as_view(), name='detail-customer'),
    path('loanoffers/', LoanOfferCreateView.as_view(), name='create-loanoffer'),
]