from django.db import models

class Shift(models.Model):
    shift_date = models.DateTimeField()
    location = models.CharField(max_length=30)
    ss_number = models.PositiveIntegerField(default=1)
    bb_number = models.PositiveIntegerField(default=1)
    created_at = models.DateField(auto_now=True)

    def __str__(self):
        return str(self.shift_date)  + " " + self.location
