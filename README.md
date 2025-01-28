# MazeGame - Laberinto Educativo 🎮

## 📖 Descripción
Un juego educativo de laberinto diseñado para niños de 5 a 7 años, desarrollado con React y Vite. El juego combina la diversión de navegar por un laberinto con preguntas educativas que aparecen durante el recorrido, fomentando el aprendizaje mientras juegan.

## 🎮 Características Principales
- Laberinto interactivo con múltiples niveles de dificultad progresiva
- Sistema dinámico de preguntas educativas adaptadas por edad
- Interfaz colorida e intuitiva diseñada específicamente para niños
- Sistema de progresión y recompensas
- Efectos de sonido y animaciones atractivas
- Controles sencillos mediante teclado o pantalla táctil
- Modo práctica y modo desafío
- Sistema de guardado de progreso

## 🛠️ Tecnologías Utilizadas
- React 18
- Vite
- CSS Modules
- React Router DOM v6
- Context API
- Canvas API
- Local Storage para guardado de progreso
- Jest para pruebas unitarias

## 📁 Estructura del Proyecto
```
maze-game/
├─ src/
│  ├─ assets/          # Recursos estáticos (imágenes, sonidos)
│  ├─ components/      # Componentes React
│  │  ├─ common/      # Componentes reutilizables
│  │  ├─ game/        # Componentes específicos del juego
│  │  ├─ menus/       # Menús del juego
│  │  └─ modals/      # Ventanas modales
│  ├─ contexts/        # Contextos de React
│  ├─ hooks/          # Hooks personalizados
│  ├─ logic/          # Lógica del juego
│  ├─ pages/          # Páginas principales
│  ├─ styles/         # Estilos CSS
│  └─ utils/          # Utilidades y helpers
```

## ⚙️ Requisitos Previos
- Node.js >= 18.0.0
- npm >= 9.0.0 o yarn >= 1.22.0
- Navegador web moderno con soporte para Canvas API

## 🚀 Instalación y Uso

1. Clonar el repositorio:
```bash
git clone https://github.com/riofutabac/MazeGame.git
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

4. Abrir el navegador en `http://localhost:5173`

## 🎯 Controles del Juego
- Teclado:
  - Flechas direccionales (↑, ↓, ←, →) para mover el personaje
  - Enter: Confirmar selecciones
  - Escape: Pausar/Menú
- Pantalla táctil:
  - Deslizar en la dirección deseada
  - Tocar botones para seleccionar opciones

## 📦 Scripts Disponibles
- `npm run dev`: Inicia el entorno de desarrollo
- `npm run build`: Genera build de producción
- `npm run preview`: Vista previa de producción
- `npm run lint`: Ejecuta el linter
- `npm run test`: Ejecuta las pruebas unitarias
- `npm run coverage`: Genera reporte de cobertura de pruebas

## 🌐 Despliegue en Producción

### Construcción Local
```bash
npm run build
```
Los archivos se generarán en la carpeta `dist/`

### Despliegue Automático en Netlify
1. Conecta tu repositorio de GitHub con Netlify
2. Configura los siguientes valores:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

## 🤝 Contribución
1. Haz un Fork del proyecto
2. Crea una rama para tu función (`git checkout -b feature/AmazingFeature`)
3. Realiza tus cambios y haz commit (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 👥 Equipo de Desarrollo
- [Alexis Lapo](https://github.com/riofutabac) - Desarrollador Principal
- [María González](https://github.com/mariagonzalez) - Diseñadora UI/UX
- [Carlos Ruiz](https://github.com/carlosruiz) - Desarrollador Frontend
- [Ana Martínez](https://github.com/anamartinez) - QA y Testing

## 📄 Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 📞 Soporte
Para reportar bugs o solicitar nuevas características, por favor:
1. Revisa los [issues existentes](https://github.com/riofutabac/MazeGame/issues)
2. Crea un nuevo issue si es necesario

---
Desarrollado con ❤️ por el equipo de MazeGame

