import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost', // Change this based on your DB setup
  port: 5432,
  username: 'postgres',
  password: 'abc123',
  database: 'apex-root',
  synchronize: true, // Set to false in production
  logging: false,
  entities: ['src/entity/*.ts'], // Adjust the path if necessary
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
});

export default AppDataSource;
