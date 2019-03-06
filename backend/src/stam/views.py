from rest_framework import viewsets

from .models import Shift
from .serializers import ShiftSerializer


class ShiftViewSet(viewsets.ModelViewSet):
    serializer_class = ShiftSerializer
    queryset = Shift.objects.all()


