import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  database: process.env.DB_NAME,
  ...(process.env.DB_USER && { user: process.env.DB_USER }),
  ...(process.env.DB_PASSWORD && { password: process.env.DB_PASSWORD })
});

// 测试数据库连接
pool.connect()
  .then(() => {
    console.log('数据库连接成功');
  })
  .catch(err => {
    console.error('数据库连接失败:', err);
  }); 