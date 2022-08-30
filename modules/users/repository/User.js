const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../../database');

const getUserByEmail = (email) => {
  return User.findOne({
    where: {
      email: email,
      userType: 'user',
    },
    include: { all: true, nested: true },
  });
};

const generateSignInToken = (userInstance, expiryHour = 24) => {
  return jwt.sign(
    {
      user_id: userInstance.get('id'),
      email: userInstance.get('email'),
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: `${expiryHour}h`,
    }
  );
};

const authenticateUser = async (email, password) => {
  const user = await getUserByEmail(email);
  if (user) {
    const verified = bcrypt.compareSync(password, user.get('password'));
    if (verified) {
      return {
        user,
        token: generateSignInToken(user),
      };
    }
    throw new Error(
      `Incorrect password supplied for user with email address ${email}`
    );
  }
  throw new Error(`User with ${email} not found`);
};

const createPassword = (password) => bcrypt.hashSync(password, 10);

const createUser = async (reqBody) => {
  return User.create({
    token: '',
    ...reqBody,
    password: createPassword(reqBody.password),
  });
};

module.exports = {
  getUserByEmail,
  authenticateUser,
  generateSignInToken,
  createUser,
  createPassword,
};
