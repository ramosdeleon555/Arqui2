# Assignment 04 – Dockerización y CI/CD

## Descripción

En esta actividad se desarrolló una aplicación web estática utilizando **Vite**, la cual fue dockerizada y automatizada mediante un pipeline de **GitHub Actions** para su construcción y publicación en **Docker Hub**.

En cada commit realizado en la rama `assignment-04`, el pipeline:

- Construye la imagen Docker
- Publica la imagen en Docker Hub
- Genera dos tags:
  - `latest`
  - SHA del commit correspondiente

---

## Aplicación

A continuación se muestra la aplicación ejecutándose en un contenedor Docker:

![Aplicación funcionando](vistaweb.jpeg)

---

## Docker Hub

Repositorio de la imagen:

https://hub.docker.com/r/ramosdeleon/assignment-04

---

## Imágenes y Tags

Se realizaron múltiples commits, generando múltiples versiones de la imagen.

- latest  
- SHA1  
- SHA2  
- SHA3  

Captura de pantalla mostrando la imagen en Docker Hub:

![Imagen en Docker Hub](image.jpeg)

Capturas mostrando los tags en Docker Hub:

![Tags en Docker Hub 1](tag1.jpeg)
![Tags en Docker Hub 2](tag2.jpeg)

---

## Pipeline de GitHub Actions

El pipeline realiza automáticamente:

1. Checkout del repositorio
2. Login en Docker Hub usando secretos
3. Build de la imagen Docker
4. Push de la imagen con tags `latest` y `${{ github.sha }}`

---

## Rama de trabajo

`assignment-04`
