const Yup = require('yup');

const emailPassword = {
  email: Yup.string().email().required(),
  password: Yup.string().required(),
};

const registerFieldsSchema = {
  ...emailPassword,
  firstName: Yup.string().required(),
  lastName: Yup.string().nullable(),
};

const loginSchema = Yup.object(emailPassword);

const registerSchema = Yup.object(registerFieldsSchema);

module.exports = {
  emailPassword,
  registerFieldsSchema,
  loginSchema,
  registerSchema,
};
