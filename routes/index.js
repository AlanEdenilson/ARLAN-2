var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ARLAN');
});

router.post('/chat', ()=>{
  console.log(req.body.mensaje)
})

module.exports = router;
