# Frontend Next.js 15 - Práctica Docker

Este frontend es una aplicación web desarrollada con Next.js 15 que forma parte de una práctica integral para aprender y contextualizar el uso de Docker en el desarrollo y despliegue de aplicaciones modernas.

## ¿Qué hace este frontend?

La aplicación simula la web de un curso de Docker, con una estética moderna y educativa. Permite a los usuarios inscribirse al curso llenando un formulario con su nombre, apellido y correo electrónico. Al enviar el formulario, la aplicación realiza dos acciones principales:

1. **Guarda el correo en la base de datos PostgreSQL**  
   Utiliza una API interna que conecta con el contenedor de la base de datos para almacenar el correo del usuario.

2. **Envía un correo de confirmación**  
   Realiza una petición al microservicio de notificaciones (otro contenedor Docker) que envía un correo de confirmación al usuario utilizando el servicio de correo implementado en Spring Boot.

## ¿Cómo se integra con Docker?

- El frontend se ejecuta en su propio contenedor Docker, definido en el archivo `docker-compose.yaml`.
- Se comunica con los otros servicios (base de datos y microservicio de correo) a través de la red interna de Docker Compose.
- Las variables de entorno necesarias para la conexión a la base de datos se definen en el archivo de configuración y se pasan desde Docker Compose.

## Flujo de funcionamiento

1. El usuario accede a la web y llena el formulario de inscripción.
2. Al enviar el formulario:
   - Se almacena el correo en la base de datos PostgreSQL.
   - Se realiza una petición al microservicio de notificaciones para enviar el correo de confirmación.
3. El usuario es redirigido a una página de felicitaciones.

## Archivos y carpetas relevantes

- `src/app/`: Contiene las páginas principales de la aplicación, incluyendo el formulario y la página de felicitaciones.
- `src/components/molecules/InputForm.tsx`: Componente del formulario de inscripción.
- `src/app/api/data/route.ts`: API interna que gestiona el almacenamiento del correo y la petición al microservicio de notificaciones.
- `Dockerfile`: Define cómo se construye la imagen Docker del frontend.

## ¿Por qué dockerizar este frontend?

- **Portabilidad:** Puede ejecutarse en cualquier entorno con Docker, sin preocuparse por dependencias locales.
- **Aislamiento:** Cada servicio (frontend, backend, base de datos) corre en su propio contenedor, evitando conflictos.
- **Escalabilidad y despliegue sencillo:** Permite levantar toda la aplicación (frontend, backend y base de datos) con un solo comando usando Docker Compose.

## Despliegue en la nube

Como parte de la práctica, todo el sistema (incluyendo este frontend) puede ser desplegado en una instancia EC2 de AWS utilizando Docker Compose y las imágenes previamente subidas a Docker Hub. Esto demuestra cómo una aplicación moderna puede ser desarrollada, empaquetada y desplegada de manera eficiente y profesional usando contenedores.

---

Esta parte de la práctica te permite experimentar cómo un frontend moderno puede integrarse y comunicarse con otros servicios dockerizados, simulando un entorno real de microservicios y despliegue en la nube.