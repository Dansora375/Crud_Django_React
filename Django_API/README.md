# 🐍 Django API Backend

API REST para la gestión de proyectos desarrollada con Django y Django REST Framework. Proporciona endpoints completos para operaciones CRUD con validación de datos y documentación automática.

## 🛠️ Tecnologías

- **Python**: 3.12+
- **Django**: 5.2+
- **Django REST Framework**: Para API REST
- **MariaDB/MySQL**: Base de datos principal
- **django-cors-headers**: Manejo de CORS
- **coreapi**: Documentación automática

## 📁 Estructura del Proyecto

```
Django_API/
├── manage.py                 # Comandos de administración
├── requirements.txt          # Dependencias Python
├── db.sqlite3               # Base de datos (desarrollo)
├── projects/                # App principal
│   ├── models.py            # Modelo Project
│   ├── serializers.py       # Serializers DRF
│   ├── views.py             # Vistas tradicionales
│   ├── api.py               # ViewSets para API
│   ├── urls.py              # URLs de la app
│   ├── admin.py             # Configuración admin
│   └── migrations/          # Migraciones de BD
└── simplecrud/              # Configuración Django
    ├── settings.py          # Configuraciones
    ├── urls.py              # URLs principales
    ├── wsgi.py              # WSGI config
    └── asgi.py              # ASGI config
```

## 🚀 Instalación y Configuración

### 1. Crear Entorno Virtual
```bash
python -m venv .venv
source .venv/bin/activate  # En Windows: .venv\Scripts\activate
```

### 2. Instalar Dependencias
```bash
pip install -r requirements.txt
```

### 3. Configurar Base de Datos

#### Para MariaDB/MySQL:
1. Crear base de datos:
```sql
CREATE DATABASE django_bd CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

2. Actualizar `settings.py`:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'django_bd',
        'USER': 'tu_usuario',
        'PASSWORD': 'tu_contraseña',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

3. Instalar conector MySQL:
```bash
pip install mysqlclient
# O alternativa para Windows:
pip install PyMySQL
```

### 4. Aplicar Migraciones
```bash
python manage.py migrate
```

### 5. Crear Superusuario (Opcional)
```bash
python manage.py createsuperuser
```

### 6. Ejecutar Servidor
```bash
python manage.py runserver
```

## 📚 API Endpoints

### Base URL: `http://localhost:8000`

| Endpoint | Método | Descripción | Parámetros |
|----------|--------|-------------|------------|
| `/api/projects/` | GET | Listar proyectos | - |
| `/api/projects/` | POST | Crear proyecto | `title`, `description` |
| `/api/projects/{id}/` | GET | Obtener proyecto | `id` en URL |
| `/api/projects/{id}/` | PUT | Actualizar completo | `id` en URL, `title`, `description` |
| `/api/projects/{id}/` | PATCH | Actualizar parcial | `id` en URL, campos opcionales |
| `/api/projects/{id}/` | DELETE | Eliminar proyecto | `id` en URL |
| `/docs/` | GET | Documentación API | - |
| `/admin/` | GET | Panel administración | - |

## 📝 Modelo de Datos

### Project Model
```python
class Project(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
```

## 🔧 Configuraciones Importantes

### CORS Settings
```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",  # React dev server
    "http://localhost:3000",  # React alternativo
]
```

### REST Framework Settings
```python
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ]
}
```

## 🧪 Testing

### Ejecutar Tests
```bash
python manage.py test
```

### Comandos Útiles
```bash
# Crear migraciones
python manage.py makemigrations

# Ver SQL de migraciones
python manage.py sqlmigrate projects 0001

# Shell interactivo
python manage.py shell

# Verificar configuración
python manage.py check
```

## 📊 Ejemplos de Uso

### Crear Proyecto (POST)
```bash
curl -X POST http://localhost:8000/api/projects/ \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Mi Nuevo Proyecto",
    "description": "Descripción del proyecto"
  }'
```

### Obtener Proyectos (GET)
```bash
curl http://localhost:8000/api/projects/
```

### Actualizar Proyecto (PUT)
```bash
curl -X PUT http://localhost:8000/api/projects/1/ \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Proyecto Actualizado",
    "description": "Nueva descripción"
  }'
```

## 🔍 Troubleshooting

### Errores Comunes

1. **Error de CORS**: Verificar `CORS_ALLOWED_ORIGINS` en settings.py
2. **Error de Base de Datos**: Verificar conexión y permisos MySQL/MariaDB
3. **Error de Migración**: Ejecutar `python manage.py makemigrations` seguido de `migrate`

### Logs
```bash
# Ver logs del servidor
python manage.py runserver --verbosity=2
```

## 📦 Dependencies

Principales dependencias en `requirements.txt`:
```
Django==5.2.5
djangorestframework==3.15.2
django-cors-headers==4.4.0
mysqlclient==2.2.4
coreapi==2.3.3
```

## 🔐 Seguridad

- Cambiar `SECRET_KEY` en producción
- Configurar `DEBUG = False` en producción
- Configurar `ALLOWED_HOSTS` apropiadamente
- Usar variables de entorno para datos sensibles

---

💡 **Tip**: Para desarrollo, puedes usar SQLite (por defecto). Para producción se recomienda PostgreSQL o MySQL/MariaDB.
