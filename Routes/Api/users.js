const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
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

    const { name, email, workphonenumber, homephonenumber,workpermit, dob, preferredlocation,address, role,employer, linkedinurl, skypeid, status, relocation, taxterms,gender, source, resume, city, state, primaryskills, profileImg} = req.body;
    try {
      let user = await User.findOne({ email });
      
      
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

 
      user = new User({
        _id: new mongoose.Types.ObjectId(),
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
      state,
      primaryskills,
      profileImg
      });
      console.log(user);
      const profileObject = {};
    profileObject.user = req.user?req.user.id:'';
    // if (name) profileFields.name = name;
    // if (email) profileFields.email = email;
    // if (workphonenumber) profileFields.workphonenumber = workphonenumber;
    // if (homephonenumber) profileFields.homephonenumber = homephonenumber;
    // if (workpermit) profileFields.workpermit = workpermit;
    // if (dob) profileFields.dob = dob;
    // if (preferredlocation) profileFields.preferredlocation = preferredlocation;
    // if (address) profileFields.address = address;
    // if (role) profileFields.role = role;
    // if (employer) profileFields.employer = employer;
    // if (linkedinurl) profileFields.linkedinurl = linkedinurl;
    // if (skypeid) profileFields.skypeid = skypeid;
    // if (status) profileFields.status = status;
    // if (relocation) profileFields.relocation = relocation;
    // if (taxterms) profileFields.taxterms = taxterms;
    // if (gender) profileFields.gender = gender;
    // if (source) profileFields.source = source;
    // if (resume) profileFields.resume = resume;
    // if (city) profileFields.city = city;
    // if (state) profileFields.state = state;

    // if (primaryskills) {
    //   profileFields.primaryskills = primaryskills.split(',').map(skill => skill.trim());
    // }

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

router.delete('/:id', async (req,res)=>{

  await User.findByIdAndDelete(req.params.id)
  res.json({'message': 'deleted'})

 
})

router.get('/:id',  (req,res)=>{

   User.findById(req.params.id, (err,data)=>{
    res.json(data)
   })
    
})

router.post('/:id', async (req,res)=>{

  await User.findByIdAndUpdate(req.params.id, req.body)
  res.json({'message': 'Updated'})
})







module.exports = router;