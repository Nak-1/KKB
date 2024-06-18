from django.db import models

class MyModel(models.Model):
    class Meta:
        db_table = 'emails'
        managed = False

    companyname = models.CharField(max_length=100)
    companybusyo = models.CharField(max_length=100)
    name1 = models.CharField(max_length=100)
    name2 = models.CharField(max_length=100)
    furi1 = models.CharField(max_length=100)
    furi2 = models.CharField(max_length=100)
    email = models.EmailField()
    tell = models.CharField(max_length=20)
    zip1 = models.CharField(max_length=10)
    zip2 = models.CharField(max_length=10)
    add = models.CharField(max_length=255)
    add2 = models.CharField(max_length=255)
    etc = models.CharField(max_length=255, blank=True)