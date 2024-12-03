declare module '@koa/cors' {
  import type { Middleware } from 'koa';
  function cors(): Middleware;
  export default cors;
} 