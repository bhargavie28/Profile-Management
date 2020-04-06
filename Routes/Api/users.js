const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const uuidv4 = require("uuid/v4");
const config = require("config");
const { check, validationResult } = require("express-validator/check");
const DIR = "./public/";
const textract = require("textract");
const xlsxFile = require("read-excel-file/node");
const readXlsxFile = require("read-excel-file/node");
const User = require("../../models/User");
const path = "./public/";
// Adding filter
class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filtering() {
    const queryobj = { ...this.queryString };
    console.log(queryobj);
    const excludedfields = ["page", "sort", "limit"];
    excludedfields.forEach(el => delete queryobj[el]);
    let querystr = JSON.stringify(queryobj);
    querystr = querystr.replace(/\b(gte|gt|lt|lte)\b/g, match => `$${match}`);
    this.query.find(JSON.parse(querystr));
    return this;
  }
}
//GET data
router.get("/", async (req, res) => {
  const users = new APIfeatures(
    User.find((error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    }),
    req.query
  ).filtering();
});
// MULTER for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
    cb(null, uuidv4() + "-" + fileName);
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

// bulk upload data
router.post("/bulkupload", upload.single("profileImg"), async (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  const file = path + req.file.filename;
  console.log("filename", file);
  const schema = {
    Name: {
      prop: "name",
      type: String
    },
    Email: {
      prop: "email",
      type: String
    },
    WorkPermit: {
      prop: "workpermit",
      type: String
    }
  };
  readXlsxFile(file, { schema }).then(({ rows, errors }) => {
    errors.length === 0;
    res.json({ rows });
    
    // const { name, email, workpermit } = rows;
    // rows = new User({
    //   _id: new mongoose.Types.ObjectId(),
    //   name,
    //   email
    // });
    // console.log('ROws', rows)
    // rows.save();
try{
    rows.map((ele)=>{
      const {name, email} = ele
      
      const newRow = new User({
        _id: new mongoose.Types.ObjectId(),
        name,
        email
      })
      console.log("NEwRows", newRow);
      newRow.save();
    })
  }catch(e){
    console.log('Eroor in D',e)
  }

  });
});
router.post("/fileupload", upload.single("profileImg"), async (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  const file = path + req.file.filename;
  console.log("filename", file);
   
try{
  textract.fromFileWithPath(file, function( error, text ) {

    console.log('text', text)

    const textuploaded = new User({
      text
    })
    console.log('Text Uploaded', textuploaded)
  })
 
  }catch(e){
    console.log('Eroor in D',e)
  }

  });

// create new profile
router.post("/", upload.single("profileImg"), async (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {
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
  } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }
    user = new User({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      email: req.body.email,
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
      primaryskills: primaryskills.split(",").map(skill => skill.trim()),
      profileImg: url + "/public/" + req.file.filename
    });
    console.log("AArray", user);
    const profileObject = {};
    profileObject.user = req.user ? req.user.id : "";
    res.json({ user });
    await user.save();
    const payload = {
      user: {
        id: user.id
      }
    };
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "deleted" });
});
router.get("/:id", (req, res) => {
  User.findById(req.params.id, (err, data) => {
    res.json(data);
  });
});
router.post("/:id", async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Updated" });
});

module.exports = router;
