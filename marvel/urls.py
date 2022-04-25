"""Marvel URLs."""
from django.contrib import admin
from django.urls import include, path
from django.conf.urls.static import static

from rest_framework.urlpatterns import format_suffix_patterns

from .settings import (
    STATIC_URL,
    STATIC_ROOT,
)

extra_patterns = [
    path('', include(('marvel_characters.urls', 'marvel_characters'), namespace='marvel_characters')),
]

urlpatterns = [
                  path('admin/', admin.site.urls),
                  path('api/v1/', include(extra_patterns)),
                  path('api-auth/', include('rest_framework.urls')),
              ] + static(STATIC_URL, document_root=STATIC_ROOT)
urlpatterns = format_suffix_patterns(urlpatterns)

