from django.db import models
# from django.contrib.auth.models import User

class Notifications(models.Model):
    # id - Primary Key, Auto populated
    message = models.TextField()
    category = models.TextField()
    # time_stamp = models.Date

    def __str__(self):
        return self.message
