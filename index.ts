import { ApolloServer, gql } from 'apollo-server-express';
import * as dotenv from 'dotenv';
import express from 'express';
import { DataSource } from 'typeorm';

dotenv.config();

const {
  DB_TYPE = 'postgres',
  DB_HOST = 'localhost',
  DB_PORT = '5432',
  DB_USERNAME = 'postgres',
  DB_PASSWORD = 'abc123',
  DB_DATABASE = 'apex-root',
  PORT = 4000,
} = process.env;

const app: any = express();

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const connectToDatabase = async () => {
  const AppDataSource = new DataSource({
    type: DB_TYPE as 'postgres',
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,

    synchronize: true,
  });

  try {
    await AppDataSource.initialize();
    console.log('Database connection established successfully.');
  } catch (error) {
    console.error('Error during Data Source initialization:', error);
  }
};

// Start the server
const startServer = async () => {
  await connectToDatabase();

  await server.start();
  server.applyMiddleware({ app }); // Apply Apollo middleware

  app.get('/', (req, res) => {
    res.send('Express + TypeScript Server with GraphQL');
  });

  app.listen(PORT, () => {
    console.log(`👁️ on http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startServer();
