var express = require('express');
var router = express.Router();
var crypto = require("crypto")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/', function(req, res, next) {
  let responseData={result:null}
  try{

    crypto.randomBytes(64, (err, buf) => {
      const salt = buf.toString('base64');
      crypto.pbkdf2(req.body.upwd, salt, 100000, 64, "sha512", (err, key) => {
          if (err) throw err;
            responseData.result="sucess";
            res.status(200).json(responseData);
          

        })
  })
  }catch(err){
    responseData.result="fail";
    res.status(400).json(responseData);
  }

});


module.exports = router;
