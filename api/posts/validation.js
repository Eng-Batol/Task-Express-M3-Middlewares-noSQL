const { Joi, validate } = require("express-validation");

const postValidation = {
  body: Joi.object({
    title: Joi.string()
      .regex(/^[A-Za-z\s]+$/)
      .max(40)
      .required(),
    body: Joi.string().required(),
  }),
};

module.exports = validate(postValidation, {}, {});
