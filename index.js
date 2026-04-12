const { ApolloServer, gql } = require('apollo-server');
const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost',
    user: 'test',
    password: '1234',
    database: 'graphql_demo'
});

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
        usuarios: async () => {
            const [rows] = await db.query("SELECT * FROM usuarios");
            return rows;
        },
        vehiculos: async () => {
            const [rows] = await db.query("SELECT * FROM vehiculos");
            return rows;
        }
    },

    Usuario: {
        vehiculos: async (parent) => {
            const [rows] = await db.query(
                "SELECT * FROM vehiculos WHERE usuario_id = ?",
                [parent.id]
            );
            return rows;
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`Servidor listo en ${url}`);
});