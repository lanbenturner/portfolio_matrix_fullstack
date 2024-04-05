from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import (
    UserViewSet,
    RegisterUserAPIView,
    CurrentUserAPIView,
)  # Import CurrentUserAPIView
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions

router = DefaultRouter()
router.register(r"users", UserViewSet)

schema_view = get_schema_view(
    openapi.Info(
        title="Portfolio Matrix API",
        default_version="v1",
        description="API documentation for Portfolio Matrix",
        # Terms of service, contact, and license information can be added here
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path("", include(router.urls)),
    path("register/", RegisterUserAPIView.as_view(), name="register"),
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path(
        "swagger/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    path("redoc/", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"),
    path(
        "me/", CurrentUserAPIView.as_view(), name="current-user"
    ),  # Add this line for "me" endpoint
]
