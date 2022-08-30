const {
  authenticateUser,
  createUser,
  generateSignInToken,
} = require('../repository/User');
const { loginSchema, registerSchema } = require('../schema');

class Auth {
  async login(req, res) {
    try {
      await loginSchema.validate(req.body);
      const { email, password } = req.body;
      const user = await authenticateUser(email, password);
      return res.send(user);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }

  async register(req, res) {
    try {
      await registerSchema.validate(req.body);
      const user = await createUser(req.body);
      const token = generateSignInToken(user);
      return res.json({
        user,
        token: token,
      });
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }
  }
}

module.exports = new Auth();
