from django.urls import path
from . import views
urlpatterns = [
    path('',views.home),
    # path('home/',views.home),
    path('login/',views.login),
    path('signup/',views.signup),
    path('login1/',views.login1),
    path('signup1/',views.Signnedup.as_view()),

]
