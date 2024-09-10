import express from 'express'
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ARLAN');
});

<<<<<<< HEAD
export default router
=======
router.post('/chat', ()=>{
  console.log(req.body.mensaje)
})

module.exports = router;
>>>>>>> 69ee9976979404808533207d2085cfab6e8ec718
