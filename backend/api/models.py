from django.db import models

# Create your models here.

class TextImage(models.Model):
    description = models.TextField()
    # image = models.ImageField(upload_to='images/')
    url = models.TextField()

    def __str__(self):
        return self.description
    
class UpscaleImage(models.Model):
    inp = models.ImageField()
    # out = models.ImageField()

    def __str__(self):
        return self.inp.name

