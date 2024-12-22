# Etapa 1: Construcción de la aplicación
FROM node:18-alpine AS builder

# Crea el directorio de trabajo en el contenedor
WORKDIR /app

# Copia package.json y package-lock.json (o yarn.lock) al contenedor
COPY package.json ./

# (Opcional) Si tienes package-lock.json o yarn.lock, descomenta la línea respectiva
# COPY package-lock.json ./
# COPY yarn.lock ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Etapa 2: Servir la aplicación usando Nginx
FROM nginx:stable-alpine

# Copiamos los archivos estáticos creados en la etapa de build al directorio de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Abre el puerto 80 para la aplicación
EXPOSE 80

# Arranca Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]