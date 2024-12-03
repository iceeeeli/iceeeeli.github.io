export const config = {
  env: process.env.NODE_ENV || 'development',
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '8888', 10),
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'ice_db'
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key'
  }
}; 