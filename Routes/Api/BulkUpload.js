const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const readXlsxFile = require('read-excel-file/node');
const User = require('../../models/User');
const file = 'C:/Users/Bhargavi_Srinidhi/Desktop/textract.xlsx';

const schema = {
    'Name': {
      prop: 'name',
      type: String
  
    },
    'Email': {
      prop: 'email',
      type: String,
      required: true
    },
  
    'WorkPermit': {
      prop: 'workpermit',
      type: String
    }
  }
 const data =  readXlsxFile(file, { schema }).then(({ rows, errors }) => {
    errors.length === 0
    console.log('NEwRows', rows)
  })

