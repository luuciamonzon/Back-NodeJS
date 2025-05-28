# React-NodeJs Backend

Este proyecto es el **backend** de la aplicación de gestión de usuarios y productos, desarrollado en Node.js (usualmente con Express).

## Requisitos

- Node.js (v16 o superior recomendado)
- npm (v8 o superior recomendado)

## Instalación

1. Ve a la carpeta del backend (por ejemplo):

   ```bash
   cd ../backend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

## Ejecución en modo desarrollo

1. Inicia el servidor backend:

   ```bash
   npm run dev
   ```

   o, si no tienes un script `dev`, usa:

   ```bash
   node index.js
   ```

   (o el archivo principal de tu backend, por ejemplo `app.js` o `server.js`)

2. El backend debería estar corriendo en:

   ```
   http://localhost:3001
   ```

   (o el puerto que indique la consola)

## Notas

- Asegúrate de que el frontend apunte a la misma URL y puerto que el backend.
- Si necesitas cambiar el puerto, edítalo en el archivo principal del backend (por ejemplo, en `index.js` o `.env`).
- Si usas una base de datos, asegúrate de que esté configurada y corriendo.

---

¡Listo! Ahora tu backend está listo para recibir peticiones del frontend.