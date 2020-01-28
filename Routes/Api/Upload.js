const express = require('express');
const router = express.Router();
const multer = require('multer');


const config = require('config');
const { check, validationResult } = require('express-validator/check');

const User = require('../../models/User');
const FILE_PATH = 'uploads';

const upload = multer({
  dest: `${FILE_PATH}/`
});

router.post('/upload-avatar', upload.single('avatar'), async (req, res) => {
    try {
        const avatar = req.file;
  
        // make sure file is available
        if (!avatar) {
            res.status(400).send({
                status: false,
                data: 'No file is selected.'
            });
        } else {
            // send response
            res.send({
                status: true,
                message: 'File is uploaded.',
                data: {
                    name: avatar.originalname,
                    mimetype: avatar.mimetype,
                    size: avatar.size
                }
            });
        }
  
    } catch (err) {
        res.status(500).send(err);
    }
  });
  
  module.exports = router;  