from django.urls import path, include

from .views import ShiftListView, ShiftDetailView


urlpatterns = [
    path('shifts/', ShiftListView.as_view()),
    path('shifts/<pk>', ShiftDetailView.as_view()),
]