from django.db import models

# Create your models here.


class pais(models.Model):
    nombre = models.CharField(max_length=50)
    poblacion = models.IntegerField()

    def __str__(self):
        return self.nombre

    class meta:
        db_table = "pais"

class ciudad(models.Model):
    nombre = models.CharField(max_length=50)
    alcalde = models.CharField(max_length=50)
    pais = models.ForeignKey(pais, on_delete=models.CASCADE, null=False, blank=False)

    def __str__(self) -> str:
        return "{} ({})".format(self.nombre, self.pais.nombre)

    class meta:
        db_table = "ciudad"