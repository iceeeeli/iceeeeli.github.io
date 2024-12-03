import Router from 'koa-router';
import jwt from 'jsonwebtoken';
import type { Context } from 'koa';
import { config } from '../config';

const router = new Router({
  prefix: '/api/auth'
});

router.post('/login', async (ctx: Context) => {
  // 实现登录逻辑
  const token = jwt.sign({ id: 1, username: 'admin' }, config.jwt.secret);
  ctx.body = { token };
});

router.post('/register', async (ctx: Context) => {
  // 实现注册逻辑
  ctx.body = { message: 'User registered successfully' };
});

export const authRouter = router; 