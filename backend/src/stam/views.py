from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Shift
from .serializers import ShiftSerializer


class ShiftListView(ListAPIView):
    queryset = Shift.objects.all()
    serializer_class = ShiftSerializer

class ShiftDetailView(RetrieveAPIView):
    queryset = Shift.objects.all()
    serializer_class = ShiftSerializer

