// routes/userdata.js
const express = require('express');
const router = express.Router();
const UserModel = require('../config');


router.get('/userdata', async (req, res) => {
     UserModel.find([] ,"-password")
     .then((result) => {
          res.render('userdata',result);
          console.log("userdata",result)
     })
     .catch((y) => console.log(y));
});
module.exports = router;
