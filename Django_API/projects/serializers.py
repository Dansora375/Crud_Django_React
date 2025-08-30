from rest_framework import serializers  
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
# para convertir un modelo en datos que van a poder ser consultados
  class Meta:
    model = Project
    fields = ('id', 'title', 'description', 'created_at', 'updated_at')      #'__all__'  para que traiga todos los campos del modelo
    read_only_fields = ('id', 'created_at', 'updated_at')