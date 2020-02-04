const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const uuidv4 = require('uuid/v4')
const config = require('config');
const { check, validationResult } = require('express-validator/check');
const DIR = './public/';


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





const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, DIR);
  },
  filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, uuidv4() + '-' + fileName)
  }
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
       //if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "file/doc") {
           cb(null, true);
     //  } else {
         //  cb(null, false);
        //   return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
     //  }
  }
});

router.post(
  '/',
  // [
  //   check('name', 'Name is required')
  //     .not()
  //     .isEmpty(),
  //   check('email', 'Please include a valid email').isEmail()

  // ],
   upload.single('profileImg'),
  
  async (req, res) => {
  const url = req.protocol + '://' + req.get('host')


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, workphonenumber, homephonenumber,workpermit, dob,preferredlocation,address, role,employer, linkedinurl, skypeid, status, relocation, taxterms,gender, source, resume, city, state, primaryskills, profileImg} = req.body;
    try {
      let user = await User.findOne({ email });
      
      
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

 
      user = new User({
        _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      email: req.body.email,
      workphonenumber,
      homephonenumber,
      workpermit,
      dob: Date(),
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
      profileImg: url + '/public/' + req.file.filename
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