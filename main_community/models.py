from django.db import models

# Create your models here.
class AddUser(models.Model):
    username = models.CharField(max_length=40)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=40)
    # phnno = models.IntegerField()

    def __str__(self):
        return "{}".format(self.email)
