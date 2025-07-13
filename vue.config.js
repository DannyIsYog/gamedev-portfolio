module.exports = {
  // For Cloudflare Pages, the production build should also serve from the root.
  // Use './' for relative paths, which is often more robust for static hosting.
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  // OR, if you prefer an absolute root path:
  // publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
};
