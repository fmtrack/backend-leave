const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/home', auth, async (req, res) => {
  res.status(200).send(`Welcome 🙌`);
});

module.exports = router;
