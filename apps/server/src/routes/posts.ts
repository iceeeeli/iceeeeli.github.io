import Router from 'koa-router';
import type { Context } from 'koa';
import { pool } from '../db';

// 定义请求体的类型
interface CreatePostBody {
  title: string;
  content: string;
}

const router = new Router({
  prefix: '/api/posts'
});

// 获取博客列表
router.get('/', async (ctx: Context) => {
  try {
    const result = await pool.query(
      'SELECT * FROM posts ORDER BY created_at DESC'
    );
    ctx.body = result.rows;
  } catch (error) {
    console.error('获取博客列表失败:', error);
    ctx.status = 500;
    ctx.body = { error: '获取博客列表失败' };
  }
});

// 创建博客
router.post('/', async (ctx: Context) => {
  console.log('收到创建博客请求:', ctx.request.body);
  
  const { title, content } = ctx.request.body as CreatePostBody;
  
  if (!title || !content) {
    console.log('标题或内容为空');
    ctx.status = 400;
    ctx.body = { error: '标题和内容不能为空' };
    return;
  }

  try {
    const result = await pool.query(
      'INSERT INTO posts (title, content, author_id) VALUES ($1, $2, $3) RETURNING id',
      [title, content, 1]
    );
    
    console.log('博客创建成功:', result);
    ctx.status = 201;
    ctx.body = {
      message: '博客创建成功',
      id: result.rows[0].id
    };
  } catch (error) {
    console.error('创建博客失败:', error);
    ctx.status = 500;
    ctx.body = { error: '创建博客失败' };
  }
});

export const postsRouter = router; 