"""Marvel Characters - Views."""
from django.contrib.auth.models import User, Group
from django.views.generic import TemplateView
from rest_framework import viewsets, views
from rest_framework import permissions, response
from rest_framework.pagination import LimitOffsetPagination

from .serializers import UserSerializer, GroupSerializer
from .services import get_image_thumbnail, get_marvel_data


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class MarvelData(views.APIView):
    def get(self, request, format=None):
        new_data = get_marvel_data()
        return response.Response(new_data)


class TestImage(views.APIView):
    def get(self, request, format=None):
        new_data = get_image_thumbnail()
        return response.Response(new_data)


class HomePageView(TemplateView):
    template_name = "index.html"