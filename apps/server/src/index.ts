import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import type { Context, Next } from 'koa';
import { config } from './config';
import { authRouter } from './routes/auth';
import { postsRouter } from './routes/posts';
import { projectsRouter } from './routes/projects';

const app = new Koa();
const router = new Router();

// 错误处理中间件
app.use(async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (err) {
    console.error('Error:', err);
    ctx.status = err.status || 500;
    ctx.body = {
      success: false,
      message: config.env === 'development' ? err.message : 'Internal Server Error'
    };
  }
});

// 中间件
app.use(cors());
app.use(bodyParser());

// 路由
app.use(authRouter.routes());
app.use(postsRouter.routes());
app.use(projectsRouter.routes());

// 健康检查
router.get('/health', (ctx: Context) => {
  ctx.body = { status: 'ok' };
});

app.use(router.routes());

const port = parseInt(process.env.PORT || '3001', 10);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 