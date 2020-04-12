const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const normalize = require('normalize-url');

const Login = require('../../models/Login');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  [
   
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let login = await Login.findOne({ email });

      if (login) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

    //   const avatar = normalize(
    //     gravatar.url(email, {
    //       s: '200',
    //       r: 'pg',
    //       d: 'mm'
    //     }),
    //     { forceHttps: true }
    //   );

      login = new Login({
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      login.password = await bcrypt.hash(password, salt);

      await login.save();

      const payload = {
        login: {
          id: login.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;