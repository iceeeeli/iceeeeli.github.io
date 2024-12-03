const jwt = require('jsonwebtoken');

module.exports = async (ctx, next) => {
  try {
    const token = ctx.headers.authorization?.split(' ')[1];
    if (!token) {
      ctx.throw(401, '未提供认证令牌');
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    ctx.state.user = decoded;
    await next();
  } catch (err) {
    ctx.throw(401, '无效的认证令牌');
  }
}; 