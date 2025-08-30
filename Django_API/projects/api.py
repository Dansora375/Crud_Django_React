from .models import Project
from rest_framework import viewsets, permissions
from .serializers import ProjectSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all() # cuando se utilice este viewset, utilizando el modelo projectos se van a  estar consultando todos los objetos () DATOS DEUNA TABLA
    serializer_class = ProjectSerializer
    permission_classes = [permissions.AllowAny]  # Aquí puedes agregar las clases de permisos que desees