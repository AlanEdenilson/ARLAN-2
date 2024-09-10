import express from 'express'
var router = express.Router();
import { add , add2 } from '../controller/index.js'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ARLAN');
});


router.post('/chat', (req,res)=>{
  console.log(req.body.mensaje)

  add(req,res)

})

router.get('/chat', (req,res)=>{
  add2(req,res)
})
export default router
