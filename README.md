# GraphQL API - Assignment 07

## Endpoint público para consumir la API
https://assingment-07.onrender.com/

## Formato de consulta (Apollo Server / GraphQL)
```graphql
query {
  usuarios {
    nombre
    vehiculos {
      marca
      modelo
    }
  }
}
```

## Formato de consulta (Insomnia / Postman)
```json
{
  "query": "query { usuarios { nombre vehiculos { marca modelo } } }"
}
```
Configuración:
- Método: POST
- URL: https://assingment-07.onrender.com/
- Header: Content-Type: application/json

## Esquema de los modelos disponibles
```graphql
type Usuario {
    id: ID!
    nombre: String
    email: String
    edad: Int
    vehiculos: [Vehiculo]
}

type Vehiculo {
    id: ID!
    marca: String
    modelo: String
    anio: Int
    usuario_id: Int
}

type Query {
    usuarios: [Usuario]
    vehiculos: [Vehiculo]
}
```

## Documentación de los modelos

### Usuario
- id: Identificador único  
- nombre: Nombre del usuario  
- email: Correo electrónico  
- edad: Edad del usuario  
- vehiculos: Lista de vehículos asociados  

### Vehiculo
- id: Identificador único  
- marca: Marca del vehículo  
- modelo: Modelo del vehículo  
- anio: Año del vehículo  
- usuario_id: Relación con el usuario  

## Ejemplo de respuesta esperada
```json
{
  "data": {
    "usuarios": [
      {
        "nombre": "Juan Perez",
        "vehiculos": [
          {
            "marca": "Toyota",
            "modelo": "Corolla"
          }
        ]
      }
    ]
  }
}
```

## Descripción del proyecto
Este proyecto implementa una API utilizando GraphQL, permitiendo consultar datos de forma flexible sin necesidad de múltiples endpoints. La API está desplegada en Render y es accesible públicamente sin autenticación.

## Tecnologías utilizadas
- Node.js
- Apollo Server
- GraphQL
- Render

## Cómo probar la API
1. Abrir Insomnia, Postman o Apollo Sandbox  
2. Crear una petición tipo POST  
3. Usar el endpoint público  
4. Enviar una consulta GraphQL en el body  
5. Verificar la respuesta en formato JSON  

## Conclusión
GraphQL permite solicitar únicamente los campos necesarios desde un solo endpoint, evitando la sobrecarga de datos y eliminando la necesidad de múltiples rutas como en arquitecturas REST tradicionales.
