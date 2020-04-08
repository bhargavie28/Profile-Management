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
    excludedfields.forEach((el) => delete queryobj[el]);
    let querystr = JSON.stringify(queryobj);
    querystr = querystr.replace(/\b(gte|gt|lt|lte)\b/g, (match) => `$${match}`);
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
  },
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
  },
});

// bulk upload data
router.post("/bulkupload", upload.single("profileImg"), async (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  const file = path + req.file.filename;
  console.log("filename", file);
  const schema = {
    name: {
      prop: "name",
      type: String,
    },
    email: {
      prop: "email",
      type: String,
    },
    workpermit: {
      prop: "workpermit",
      type: String,
    },
    workphonenumber: {
      prop: "workphonenumber",
      type: Number,
    },
    homephonenumber: {
      prop: "homephonenumber",
      type: Number,
    },
    dob: {
      prop: "dob",
      type: String,
    },
    preferredlocation: {
      prop: "preferredlocation",
      type: String,
    },
    address: {
      prop: "address",
      type: String,
    },
    role: {
      prop: "role",
      type: String,
    },
    employer: {
      prop: "employer",
      type: String,
    },
    linkedinurl: {
      prop: "linkedinurl",
      type: String,
    },
    skypeid: {
      prop: "skypeid",
      type: String,
    },
    status: {
      prop: "status",
      type: String,
    },
    relocation: {
      prop: "relocation",
      type: String,
    },
    taxterms: {
      prop: "taxterms",
      type: String,
    },
    gender: {
      prop: "gender",
      type: String,
    },

    source: {
      prop: "source",
      type: String,
    },
    resume: {
      prop: "resume",
      type: String,
    },
    city: {
      prop: "city",
      type: String,
    },
    state: {
      prop: "state",
      type: String,
    },
    primaryskills: {
      prop: "primaryskills",
      type: [String],
    },
    profileImg: {
      prop: "profileImg",
      type: String,
    },
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
    try {
      rows.map((ele) => {
        const {
          name,
          email,
          workpermit,
          workphonenumber,
          homephonenumber,
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
          profileImg,
        } = ele;

        const newRow = new User({
          _id: new mongoose.Types.ObjectId(),
          name,
          email,
          workpermit,
          workphonenumber,
          homephonenumber,
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
          profileImg: url + "/public/" + req.file.filename,
        });
        console.log("NEwRows", newRow);
        newRow.save();
      });
    } catch (e) {
      console.log("Eroor in D", e);
    }
  });
});

router.get("/text", upload.single("profileImg"), async (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  const file = path + req.file.filename;
  console.log("filename", file);

  try {
    textract.fromFileWithPath(file, function(error, text) {
      console.log("text", text);
      const email = text.match(
        /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi
      );
      console.log("Email", email);

      const textuploaded = new User({
        text,
      });
      console.log("Text Uploaded", textuploaded);
    });
  } catch (e) {
    console.log("Eroor in D", e);
  }
});
router.post("/fileupload", upload.single("profileImg"), async (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  const file = path + req.file.filename;
  console.log("filename", file);

  try {
    textract.fromFileWithPath(file, function(error, text) {
      console.log("text", text);
      res.json({ text });

      // const textuploaded = new User({
      //   text
      // })
      //res.json({text})
    //  console.log("Text Uploaded", text);
      var resume = new Object();
       
      const newemail=text.match(
        /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi
      );
      resume.email = newemail[0];

      const phone  = text.match(/[\+]?\d{10}|\(\d{3}\)\s?-\d{6}/gi);
      resume.workphonenumber = phone[0]
       const namenew = text.match(/(\w+\s*\w+)\s/gi);
         resume.name = namenew[0];
      const skills  = text.match(/Languages\s((?:\S|\s(?!\s))*)/gi);
      resume.primaryskills = skills[0]
      console.log('hdcdskikxcijdciojdioajc', resume)

      const {name, workphonenumber, email, primaryskills} = resume;

      const row = new User({
        _id: new mongoose.Types.ObjectId(),
        name,
        email,
        workphonenumber,
        primaryskills      
      })
row.save();
    });
  } catch (e) {
    console.log("Eroor in D", e);
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
    profileImg,
    tags,
    tag
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
      //primaryskills: primaryskills.split(",").map((skill) => skill.trim()),
      tag,
      tags: Array.isArray(tags)? tags: tags.split(',').map(tag => '' + tag.trim())
    //  profileImg: url + "/public/" + req.file.filename,
    });
    console.log("AArray", user);
    const profileObject = {};
    profileObject.user = req.user ? req.user.id : "";
    res.json({ user });
    await user.save();
    const payload = {
      user: {
        id: user.id,
      },
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
