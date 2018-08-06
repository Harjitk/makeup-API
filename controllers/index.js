const express = require('express');
const router = new express.Router();

router.use('/brands', require('./brands'));
router.use('/products', require('./products'));


router.get('/', function(req, res){
  res.json({data: "Welcome!"})
});

router.get('/about', function(req, res){
res.json({data: "Popular Brands"});
})

module.exports = router;
