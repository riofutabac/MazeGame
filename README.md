# MazeGame - Laberinto Educativo

## 📖 Descripción
Un juego educativo de laberinto diseñado para niños de 5 a 7 años, desarrollado con React y Vite. El juego combina la diversión de navegar por un laberinto con preguntas educativas que aparecen durante el recorrido.

## 🎮 Características Principales
- Laberinto interactivo con múltiples niveles
- Sistema de preguntas educativas
- Diferentes niveles de dificultad
- Interfaz intuitiva y amigable para niños
- Sistema completo de menús y configuraciones
- Controles sencillos mediante teclado

## 🛠️ Tecnologías Utilizadas
- React 18
- Vite
- CSS Modules
- React Router DOM
- Context API

## 📁 Estructura del Proyecto
```
maze-game/
├─ src/
│  ├─ assets/          # Recursos estáticos
│  ├─ components/      # Componentes React
│  │  ├─ common/      # Componentes reutilizables
│  │  ├─ menus/       # Menús del juego
│  │  └─ modals/      # Ventanas modales
│  ├─ pages/          # Páginas principales
│  ├─ utils/          # Utilidades y helpers
│  ├─ styles/         # Estilos CSS
│  └─ context/        # Contextos de React
```

## ⚙️ Requisitos
- Node.js >= 18.0.0
- npm o yarn

## 🚀 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/maze-game.git
```

2. Instalar dependencias:
```bash
cd maze-game
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## 🎯 Controles
- Flechas direccionales (↑, ↓, ←, →) para mover el personaje
- Enter: Confirmar selecciones
- Escape: Pausar/Menú

## 📦 Scripts Disponibles
- `npm run dev`: Inicia el entorno de desarrollo
- `npm run build`: Genera build de producción
- `npm run preview`: Vista previa de producción
- `npm run lint`: Ejecuta el linter

## 🌐 Despliegue
Para generar la versión de producción:
```bash
npm run build
```
Los archivos se generarán en la carpeta `dist/`

## 📝 Despliegue en Netlify

1. Asegúrate de tener tu código en un repositorio de GitHub

2. En Netlify:
   - Inicia sesión en [Netlify](https://www.netlify.com/)
   - Haz clic en "New site from Git"
   - Selecciona tu repositorio de GitHub
   - Configura los siguientes valores:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Haz clic en "Deploy site"

3. Configuraciones adicionales:
   - En la sección "Build & Deploy" de tu sitio en Netlify:
     - Verifica que el comando de build sea: `npm run build`
     - El directorio de publicación sea: `dist`

4. Variables de entorno (si las necesitas):
   - Ve a Site settings > Build & deploy > Environment
   - Añade tus variables de entorno necesarias

Los redirects para el manejo de rutas ya están configurados en el archivo `netlify.toml`

## 📝 Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.

## 👥 Contribuidores
- [Alexis Lapo](https://github.com/riofutabac)
- [Alexis Lapo](https://github.com/riofutabac)
- [Alexis Lapo](https://github.com/riofutabac)
- [Alexis Lapo](https://github.com/riofutabac)

