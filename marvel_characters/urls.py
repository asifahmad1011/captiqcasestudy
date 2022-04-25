from .views import MarvelData, TestImage, HomePageView
from rest_framework.routers import SimpleRouter
from django.urls import include, path


#router = SimpleRouter()
#router.register(r'comics-data', TestData.as_view(), basename='comics-data')
urlpatterns = [
    path('characters-data', MarvelData.as_view()),
    # path('comics-img', TestImage.as_view()),
    path('home', HomePageView.as_view())

]