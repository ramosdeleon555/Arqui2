const { ApolloServer, gql } = require('apollo-server');

const usuarios = [
  { id: 1, nombre: "Juan Perez", email: "juan@mail.com", edad: 25 },
  { id: 2, nombre: "Maria Lopez", email: "maria@mail.com", edad: 30 }
];

const vehiculos = [
  { id: 1, marca: "Toyota", modelo: "Corolla", anio: 2020, usuario_id: 1 },
  { id: 2, marca: "Honda", modelo: "Civic", anio: 2019, usuario_id: 2 },
  { id: 3, marca: "Mazda", modelo: "3", anio: 2021, usuario_id: 1 }
];

const typeDefs = gql`
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
`;

const resolvers = {
  Query: {
    usuarios: () => usuarios,
    vehiculos: () => vehiculos
  },
  Usuario: {
    vehiculos: (parent) => {
      return vehiculos.filter(v => v.usuario_id === parent.id);
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({
  port: process.env.PORT || 4000
}).then(({ url }) => {
  console.log(`Servidor listo en ${url}`);
});