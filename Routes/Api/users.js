const express = require('express');
const router = express.Router();
const multer = require('multer');


const config = require('config');
const { check, validationResult } = require('express-validator/check');

const User = require('../../models/User');

// @route    POST api/users
// @desc     Register user
// @access   Public

router.get('/', async (req,res)=>{

  User.find((error, data)=>{
    if(error) {
      return next(error)
  } else
  {
    res.json(data)
  }
})

})


router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail()

  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, workphonenumber, homephonenumber,workpermit, dob, preferredlocation,address, role,employer, linkedinurl, skypeid, status, relocation, taxterms,gender, source, resume, city, state } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({
      name,
      email,
      workphonenumber,
      homephonenumber,
      workpermit,
      dob,
      preferredlocation,
      address,
      role,
      employer,
      linkedinurl,
      skypeid,
      status,
      relocation,
      taxterms,
      gender,
      source,
      resume,
      city,
      state
      });

      res.json({ user});
      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };


    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);




module.exports = router;