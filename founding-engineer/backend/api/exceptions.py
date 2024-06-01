from rest_framework.views import exception_handler
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from rest_framework import status


def custom_exception_handler(exc, context):
    """
    Custom exception handler that modifies the default error response to be more user-friendly.
    """
    response = exception_handler(exc, context)

    if isinstance(exc, ValidationError) and response is not None:
        custom_response_data = {
            'message': 'Please correct the following validation errors and try again.',
            'errors': []
        }
        for field, errors in response.data.items():
            for error in errors:
                custom_response_data['errors'].append({field: error})

        return Response(custom_response_data, status=status.HTTP_400_BAD_REQUEST)

    return response
