# 🚀 Django-React CRUD Project

Un proyecto fullstack completo que implementa un sistema CRUD (Create, Read, Update, Delete) para la gestión de proyectos, utilizando Django como backend API REST y React como frontend con diseño atómico.

## 📋 Descripción

Este repositorio contiene una aplicación web moderna dividida en dos partes principales:

- **Backend**: API REST desarrollada con Django y Django REST Framework
- **Frontend**: Interfaz de usuario desarrollada con React, Vite y arquitectura de componentes atómicos

## 🛠️ Tecnologías Utilizadas

### Backend (Django)
- Python 3.12+
- Django 5.2+
- Django REST Framework
- MariaDB/MySQL
- CORS Headers

### Frontend (React)
- React 19+
- Vite (Build Tool)
- TanStack React Query (Data Fetching)
- Axios (HTTP Client)
- CSS Modules
- Arquitectura Atómica de Componentes

## 🏗️ Arquitectura del Proyecto

```
Django-REACT/
├── Django_API/          # Backend Django
│   ├── projects/        # App principal
│   ├── simplecrud/      # Configuración Django
│   └── manage.py
└── Front/
    └── Front-end/       # Frontend React
        ├── src/
        │   ├── components/  # Componentes atómicos
        │   ├── pages/       # Páginas principales
        │   ├── hooks/       # Custom hooks
        │   ├── services/    # API services
        │   └── types/       # Tipos y validaciones
        └── package.json
```

## 🚀 Inicio Rápido

### Prerrequisitos
- Python 3.12+
- Node.js 18+
- MariaDB/MySQL
- Git

### 1. Clonar el Repositorio
```bash
git clone https://github.com/Dansora375/Crud_Django_React.git
cd Crud_Django_React
```

### 2. Configurar Backend
```bash
cd Django_API
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 3. Configurar Frontend
```bash
cd Front/Front-end
npm install
npm run dev
```

### 4. Acceder a la Aplicación
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000/api/
- **Documentación API**: http://localhost:8000/docs/

## 📖 Funcionalidades

### ✅ Backend Features
- API REST completa para gestión de proyectos
- Operaciones CRUD (Create, Read, Update, Delete)
- Validación de datos
- Paginación y filtros
- Documentación automática con Django REST Framework
- Configuración CORS para comunicación con frontend
- Base de datos MariaDB/MySQL

### ✅ Frontend Features
- Interfaz moderna y responsiva
- Arquitectura de componentes atómicos (Atoms, Molecules, Organisms)
- Gestión de estado con React Query
- Formularios con validación en tiempo real
- Loading states y manejo de errores
- Diseño mobile-first
- Confirmaciones para acciones destructivas

## 🔄 API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/projects/` | Listar todos los proyectos |
| POST | `/api/projects/` | Crear nuevo proyecto |
| GET | `/api/projects/{id}/` | Obtener proyecto específico |
| PUT | `/api/projects/{id}/` | Actualizar proyecto completo |
| PATCH | `/api/projects/{id}/` | Actualizar proyecto parcial |
| DELETE | `/api/projects/{id}/` | Eliminar proyecto |

## 📱 Capturas de Pantalla

### Lista de Proyectos
![Lista de Proyectos](docs/images/project-list.png)

### Formulario de Creación
![Formulario](docs/images/project-form.png)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👤 Autor

**Daniel Sora** - [@Dansora375](https://github.com/Dansora375)

## 🔗 Enlaces Útiles

- [Django Documentation](https://docs.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [TanStack Query](https://tanstack.com/query/)

---

⭐ **Si este proyecto te ha sido útil, no olvides darle una estrella!**
