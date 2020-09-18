const { createProxyMiddleware } = require("http-proxy-middleware");

console.log("я приделываюсь автоматически");

module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:8080",
    })
  );
};