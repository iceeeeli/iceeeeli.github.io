-- 删除已存在的数据库（如果需要重新创建）
DROP DATABASE IF EXISTS ice_db;

-- 创建数据库
CREATE DATABASE ice_db;

-- 连接到新创建的数据库
\c ice_db;

-- 创建表
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  author_id INTEGER REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  github_url VARCHAR(255),
  demo_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 插入测试数据
INSERT INTO users (username, password, email) VALUES
('admin', 'password', 'admin@example.com'),
('test', 'password', 'test@example.com');

INSERT INTO posts (title, content, author_id) VALUES
('第一篇博客', '这是我的第一篇博客内容...', 1),
('技术分享', '分享一些技术经验...', 1),
('学习笔记', '今天学习了PostgreSQL数据库...', 2),
('开发日记', '开发个人网站的一些心得...', 1);

INSERT INTO projects (name, description, github_url) VALUES
('个人网站', '使用Next.js构建的个人网站', 'https://github.com/yourusername/personal-website'),
('开源项目', '一个有趣的开源项目', 'https://github.com/yourusername/open-source-project'),
('工具集合', '常用的开发工具集合', 'https://github.com/yourusername/tools'),
('学习项目', '学习过程中的示例代码', 'https://github.com/yourusername/learning'); 