# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash

# pnpm
pnpm install

```

## Development Server

Start the development server on `http://localhost:3000`:

```bash

# pnpm
pnpm dev

```

## Production

Build the application for production:

```bash

# pnpm
pnpm build

```

Locally preview production build:

```bash

# pnpm
pnpm preview


```

## Project Structure

.
├── app # Carpeta principal de la aplicación Nuxt
│ ├── app.vue # Componente raíz, punto de entrada de la app
│ ├── assets # Recursos estáticos que se procesan (Sass, imágenes optimizadas, fuentes…)
│ │ └── styles # Carpeta de estilos globales
│ │ ├── main.scss # Archivo principal de estilos, importa reset y otros parciales
│ │ └── reset.scss # Reset de estilos para normalizar entre navegadores
│ ├── layouts # Plantillas de diseño que envuelven las páginas
│ │ └── default.vue # Layout por defecto aplicado a todas las páginas
│ └── pages # Rutas de la aplicación (cada .vue = una ruta)
│ └── index.vue # Página principal (ruta "/")
├── node_modules # Dependencias instaladas con pnpm
│ ├── nuxt -> ... # Framework Nuxt
│ ├── @pinia # Integración oficial de Pinia con Nuxt
│ │ └── nuxt -> ... # Módulo @pinia/nuxt
│ ├── pinia -> ... # Librería Pinia (gestión de estado)
│ ├── sass -> ... # Compilador Sass
│ ├── vue -> ... # Núcleo de Vue 3
│ └── vue-router -> ... # Enrutador oficial de Vue 3
├── nuxt.config.ts # Configuración principal de Nuxt (módulos, CSS global, etc.)
├── package.json # Dependencias, scripts y metadatos del proyecto
├── pnpm-lock.yaml # Archivo de bloqueo de dependencias (consistencia entre instalaciones)
├── public # Archivos estáticos servidos tal cual
│ ├── favicon.ico # Ícono de la aplicación
│ └── robots.txt # Instrucciones para crawlers de buscadores
├── README.md # Documentación inicial del proyecto
└── tsconfig.json # Configuración de TypeScript
