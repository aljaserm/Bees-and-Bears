from rest_framework import serializers
from api.models.customer import Customer
import re


class CustomerSerializer(serializers.ModelSerializer):
    """
    Serializer for Customer model with enhanced input validation.
    """

    class Meta:
        model = Customer
        fields = '__all__'

    def validate_email(self, value):
        if not value:
            raise serializers.ValidationError("Email is required.")
        return value

    def validate_first_name(self, value):
        """
        Validate that the first name does not contain numbers.
        """
        if not value:
            raise serializers.ValidationError("First name is required.")
        if not isinstance(value, str):
            raise serializers.ValidationError("First name must be a string.")
        if not value.strip():
            raise serializers.ValidationError("First name cannot be empty or whitespace.")
        if any(char.isdigit() for char in value):
            raise serializers.ValidationError("First name cannot contain numbers.")
        return value

    def validate_last_name(self, value):
        """
        Validate that the last name does not contain numbers.
        """
        if not value:
            raise serializers.ValidationError("Last name is required.")
        if not isinstance(value, str):
            raise serializers.ValidationError("Last name must be a string.")
        if not value.strip():
            raise serializers.ValidationError("Last name cannot be empty or whitespace.")
        if any(char.isdigit() for char in value):
            raise serializers.ValidationError("Last name cannot contain numbers.")
        return value
