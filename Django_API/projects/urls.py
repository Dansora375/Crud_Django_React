from rest_framework import routers
from .api import ProjectViewSet
from django.urls import path, include
from . import views

router = routers.DefaultRouter()

router.register('projects', ProjectViewSet, 'projects')  # ✅ Solo 'projects'

urlpatterns = [
    path('', views.project_list, name='project_list'),  # Primero tu vista
    path('api/', include(router.urls)),  # Router en /api/
]