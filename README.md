# Assignment 03 - Arquitectura de Sistemas II

http://assignment-03-env.eba-hq5tuqmt.us-east-2.elasticbeanstalk.com/

##  Descripción

Este proyecto consiste en la implementación y despliegue de una aplicación web utilizando:

- Vite
- Docker
- Husky
- GitHub Actions
- AWS Elastic Beanstalk
- Doppler

---

##  Docker

Se creó un Dockerfile multi-stage para:

1. Construir la aplicación con Node
2. Servirla con Nginx

### Imagen construida localmente
![Docker Running](images/docker.jpeg)

---

## Doppler

Se configuró para la gestión de variables de entorno y sincronización con GitHub.
![Secrets](images/secretos.jpeg)

![Conection](images/conexion.jpeg)

---

## Despliegue en AWS Elastic Beanstalk

La aplicación fue desplegada en AWS Elastic Beanstalk. Primeramente debemos ingresar con nuestras credenciales a AWS, luego en la búsqueda ingresamos Elastic Beanstalk y damos clic.
Después, creamos nuestro entorno dando clic en Siguiente, y nos debe aparecer algo como esto: 
![AWS view](images/guia0.jpeg)

Damos clic en el botón amarillo de Cargar e Implementar
![Charge & Implement](images/guia1.jpeg)

Se nos abre la configuración del entorno. Damos en entorno de servidor web, y le ponemos un nombre a la aplicación. Damos clic en Siguiente. Abrimos en la URL brindada y debe decir algo relacionado a AWS Elastic Beanstalk.
![Entorn level](images/guia2.jpeg)

Terminamos el proceso, y luego en cargar e implementar nuevamente y ahora si subimos lo que ya tenemos en el proyecto.
![Upload files](images/guia3.jpeg)

---

##  Husky (Pre-commit Hook)

Se configuró Husky para ejecutar:

---

## Vista de la app 

![View App](images/app.jpeg)

```bash
npm run build



