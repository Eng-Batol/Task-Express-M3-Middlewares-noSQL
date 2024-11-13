const slugify = require("slugify");

const slugMiddleware = (req, res, next) => {
  if (req.body.title) {
    req.body.slug = slugify(req.body.title, { lower: true });
  }
  next();
};

module.exports = slugMiddleware;
