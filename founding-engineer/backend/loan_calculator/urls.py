from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from api.views.root_redirect_view import redirect_to_swagger

schema_view = get_schema_view(
    openapi.Info(
        title="Loan Calculator API",
        default_version='v1',
        description="API documentation for the Loan Calculator",
    ),
    public=True,
    permission_classes=[permissions.AllowAny,],
)

urlpatterns = [
    path('', redirect_to_swagger, name='root-redirect'),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),  # Updated path to include api app
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]