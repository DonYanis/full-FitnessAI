from django.db import models
    
class User(models.Model):

    username=models.CharField(max_length=20, null=False,blank=False)
    password=models.CharField(max_length=20, null=False,blank=False)

    has_data = models.BooleanField(default=False)

    health=models.CharField(max_length=20, null=True,blank=True)
    food=models.CharField(max_length=20, null=True,blank=True)
    training=models.CharField(max_length=20, null=True,blank=True)
    program=models.CharField(max_length=200, null=True,blank=True)
    eat=models.CharField(max_length=200, null=True,blank=True)
    avoid=models.CharField(max_length=200, null=True,blank=True)
    advice=models.CharField(max_length=400, null=True,blank=True)
    
    calories=models.FloatField(null=True,blank=True)
    protein=models.FloatField(null=True,blank=True)
    carbs=models.FloatField(null=True,blank=True)
    fat=models.FloatField(null=True,blank=True)
    fibers=models.FloatField(null=True,blank=True)

    def __str__(self) :
        return str(self.username)
