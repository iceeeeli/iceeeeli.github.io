import Router from 'koa-router';
import type { Context } from 'koa';

const router = new Router({
  prefix: '/api/projects'
});

router.get('/', async (ctx: Context) => {
  ctx.body = [
    { 
      id: 1, 
      name: '个人网站', 
      description: '使用Next.js构建的个人网站',
      github_url: 'https://github.com/yourusername/personal-website'
    }
  ];
});

export const projectsRouter = router; 