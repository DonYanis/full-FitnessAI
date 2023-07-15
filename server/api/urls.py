from django.urls import path
from . import views

urlpatterns = [
    path('home/',views.home, name="home"),
    path('users/',views.getUsers, name="users"),
    path('login/',views.login, name="login"),
    path('submit/',views.home, name="submit")   
]