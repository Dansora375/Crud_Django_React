# ⚛️ React Frontend

Aplicación frontend moderna desarrollada con React, Vite y arquitectura de componentes atómicos. Proporciona una interfaz intuitiva para la gestión de proyectos con comunicación en tiempo real con la API Django.

## 🛠️ Tecnologías

- **React**: 19+ con Hooks
- **Vite**: Build tool y dev server ultrarrápido  
- **TanStack React Query**: Gestión de estado del servidor y caché
- **Axios**: Cliente HTTP para API calls
- **CSS Modules**: Estilos modulares y scoped
- **ESLint**: Linting y calidad de código

## 🏗️ Arquitectura Atómica

El proyecto sigue la metodología **Atomic Design** de Brad Frost:

```
src/
├── components/
│   ├── atoms/          # Componentes básicos
│   │   ├── Button/     # Botones reutilizables
│   │   ├── Input/      # Campos de entrada
│   │   ├── Card/       # Contenedores base
│   │   ├── Loading/    # Estados de carga
│   │   └── Textarea/   # Áreas de texto
│   ├── molecules/      # Combinación de átomos
│   │   ├── ProjectCard/    # Tarjeta de proyecto
│   │   └── ProjectForm/    # Formulario de proyecto
│   └── organisms/      # Componentes complejos
│       ├── ProjectList/    # Lista completa de proyectos
│       └── Header/         # Encabezado de aplicación
├── pages/              # Páginas principales
│   └── ProjectsPage/   # Página principal de proyectos
├── hooks/              # Custom hooks
│   └── useProjects.js  # Hook para gestión de proyectos
├── services/           # Servicios API
│   ├── apiClient.js    # Cliente Axios configurado
│   └── projectsApi.js  # Endpoints de proyectos
├── types/              # Tipos y validaciones
│   └── project.js      # Validaciones de proyecto
└── utils/              # Utilidades
    └── helpers.js      # Funciones helper
```

## 🚀 Instalación y Configuración

### 1. Instalar Dependencias
```bash
npm install
```

### 2. Configurar Variables de Entorno
Crear archivo `.env.local`:
```env
VITE_API_BASE_URL=http://localhost:8000
```

### 3. Ejecutar en Desarrollo
```bash
npm run dev
```

### 4. Build para Producción
```bash
npm run build
```

### 5. Preview de Producción
```bash
npm run preview
```

## 📱 Funcionalidades

### ✅ Gestión de Proyectos
- ➕ Crear nuevos proyectos
- 📋 Listar todos los proyectos
- ✏️ Editar proyectos existentes
- 🗑️ Eliminar proyectos (con confirmación)
- 🔍 Estados de carga y error

### ✅ UI/UX Features
- 📱 Diseño completamente responsivo
- ⚡ Carga instantánea con React Query cache
- 🎯 Validación de formularios en tiempo real
- 🔄 Estados de loading optimizados
- ❌ Manejo robusto de errores
- ✅ Confirmaciones para acciones destructivas
- 🎨 Interfaz moderna y limpia

## 🧩 Componentes Principales

### 🔸 Atoms (Átomos)
- **Button**: Botones con variantes (primary, secondary, danger, success)
- **Input**: Campos de entrada con validación y estados
- **Textarea**: Áreas de texto para descripciones
- **Card**: Contenedores con diferentes estilos
- **Loading**: Animaciones de carga (spinner, dots, pulse)

### 🔸 Molecules (Moléculas)
- **ProjectCard**: Tarjeta individual de proyecto con acciones
- **ProjectForm**: Formulario completo para crear/editar

### 🔸 Organisms (Organismos)
- **ProjectList**: Lista completa con grid responsivo
- **Header**: Encabezado con branding y navegación

### 🔸 Pages (Páginas)
- **ProjectsPage**: Página principal con gestión completa

## 🎣 Custom Hooks

### `useProjects()`
```javascript
// Obtener todos los proyectos
const { data: projects, isLoading, error } = useProjects();

// Crear proyecto
const createMutation = useCreateProject();
await createMutation.mutateAsync(projectData);

// Actualizar proyecto
const updateMutation = useUpdateProject();
await updateMutation.mutateAsync({ id, data });

// Eliminar proyecto
const deleteMutation = useDeleteProject();
await deleteMutation.mutateAsync(projectId);
```

## 🔧 Configuración API

### Cliente Axios
```javascript
const apiClient = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});
```

### React Query Setup
```javascript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutos
    }
  }
});
```

## 📊 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo

# Producción  
npm run build        # Build de producción
npm run preview      # Preview del build

# Linting
npm run lint         # Ejecutar ESLint
```

## 🎨 Sistema de Estilos

### Convenciones CSS
- **BEM Methodology**: Para nomenclatura de clases
- **CSS Custom Properties**: Para variables de design system
- **Mobile-First**: Diseño responsive desde móvil
- **CSS Modules**: Estilos scoped por componente

### Ejemplo de Estructura CSS
```css
/* Componente base */
.project-card { }

/* Modificadores */
.project-card--loading { }
.project-card--error { }

/* Elementos */
.project-card__header { }
.project-card__title { }
.project-card__actions { }
```

## 🔍 Estructura de Estados

### Loading States
```javascript
// Estados globales
- isLoading: Carga inicial
- isPending: Mutaciones en progreso
- isError: Estados de error
- isSuccess: Confirmaciones de éxito
```

### Error Handling
```javascript
// Interceptor global de errores
apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error);
    throw error;
  }
);
```

## 🧪 Testing

### Ejecutar Tests
```bash
npm run test          # Tests unitarios
npm run test:coverage # Coverage report
```

## 📦 Dependencias Principales

```json
{
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "@tanstack/react-query": "^5.x",
    "axios": "^1.x",
    "lucide-react": "^0.x"
  },
  "devDependencies": {
    "vite": "^7.1.2",
    "@vitejs/plugin-react": "^5.0.0",
    "eslint": "^9.33.0"
  }
}
```

## 🚀 Performance

### Optimizaciones Implementadas
- ⚡ **Code Splitting**: Carga lazy de componentes
- 💾 **React Query Cache**: Cache inteligente de datos
- 🔄 **Optimistic Updates**: Actualizaciones optimistas
- 📦 **Bundle Optimization**: Vite para builds optimizados
- 🖼️ **Image Optimization**: Lazy loading de imágenes

## 🔧 Configuración Avanzada

### Vite Config
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
```

## 🐛 Troubleshooting

### Problemas Comunes
1. **CORS Error**: Verificar configuración del backend Django
2. **API Connection**: Verificar que el backend esté corriendo en puerto 8000
3. **Build Errors**: Limpiar `node_modules` y reinstalar dependencias

### Debug Mode
```bash
# Modo verbose
npm run dev -- --debug

# Limpiar cache
rm -rf node_modules/.vite
```

---

💡 **Tip**: Para mejor experiencia de desarrollo, instala las extensiones de React y ESLint en tu editor.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
