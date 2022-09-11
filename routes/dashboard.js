var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    name:"Nagarajan",
    email:"raj@gmail.com",
    status:"Approved"
  })
});

module.exports = router;
