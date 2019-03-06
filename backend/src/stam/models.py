from django.db import models
from django.utils import timezone as tz

class Shift(models.Model):
    shift_date = models.DateTimeField()
    location = models.CharField(max_length=30)
    ss_number = models.PositiveIntegerField(default=1)
    bb_number = models.PositiveIntegerField(default=1)
    created_at = models.DateField(auto_now=True)

    def __str__(self):
        return self.shift_date.strftime('%d/%m/%Y at %H:%M:%S') + ' - ' + self.location
