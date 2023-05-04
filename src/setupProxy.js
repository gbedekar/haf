const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'https://publish-p24107-e920534.adobeaemcloud.com/',
    changeOrigin: true
}
module.exports = function(app) {
  app.use(
    '/adobe',
    createProxyMiddleware(proxy)
  ),
  app.use(
    '/content',
    createProxyMiddleware(proxy)
  );
};