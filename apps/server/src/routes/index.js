const Router = require('koa-router');
const router = new Router();
const authMiddleware = require('../middleware/auth');

// 公开路由
router.post('/api/auth/login', authController.login);
router.post('/api/auth/register', authController.register);

// 需要认证的路由
router.get('/api/posts', authMiddleware, postController.list);
router.post('/api/posts', authMiddleware, postController.create);
router.get('/api/projects', authMiddleware, projectController.list);
router.post('/api/projects', authMiddleware, projectController.create);

module.exports = router; 