from django.urls import path, include

from .views import ShiftListView, ShiftDetailView


urlpatterns = [
    path('', ShiftListView.as_view()),
    path('<pk>', ShiftDetailView.as_view()),
]