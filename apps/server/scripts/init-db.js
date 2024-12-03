const mysql = require('mysql2/promise');
require('dotenv').config();

async function initDatabase() {
  // 创建数据库连接
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  });

  try {
    // 创建数据库
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
    await connection.query(`USE ${process.env.DB_NAME}`);

    // 创建用户表
    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // 创建文章表
    await connection.query(`
      CREATE TABLE IF NOT EXISTS posts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        author_id INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (author_id) REFERENCES users(id)
      )
    `);

    // 创建项目表
    await connection.query(`
      CREATE TABLE IF NOT EXISTS projects (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        github_url VARCHAR(255),
        demo_url VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // 插入测试数据
    await connection.query(`
      INSERT INTO users (username, password, email) VALUES
      ('admin', '$2b$10$YourHashedPassword', 'admin@example.com')
    `);

    await connection.query(`
      INSERT INTO posts (title, content, author_id) VALUES
      ('第一篇博客', '这是我的第一篇博客内容...', 1),
      ('技术分享', '分享一些技术经验...', 1)
    `);

    await connection.query(`
      INSERT INTO projects (name, description, github_url) VALUES
      ('个人网站', '使用Next.js构建的个人网站', 'https://github.com/yourusername/personal-website'),
      ('开源项目', '一个有趣的开源项目', 'https://github.com/yourusername/open-source-project')
    `);

    console.log('数据库初始化成功！');
  } catch (error) {
    console.error('数据库初始化失败：', error);
  } finally {
    await connection.end();
  }
}

initDatabase(); 