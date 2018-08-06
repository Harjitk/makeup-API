const express = require('express');
const brandRouter = new express.Router();

const brands = ["NARS", "Charlotte Tilbury", "Huda Beauty", "Fenty"];

// index= all the brands
brandRouter.get('/', function(req, res){
  res.json(brands);
});

// show the brands
brandRouter.get('/:id', function(req, res){
  let index = req.params.id;
  res.json({data: brands[index]});
});


// // create
brandRouter.post('/', function(req, res){
  brands.push(req.body.brand);
  res.json(brands);
});

// UPDATE

brandRouter.put('/:id', function(req, res){
  let index = req.params.id;
  brands[index] = req.body.brand;
  res.json({data: brands});
})


// delete
brandRouter.delete('/:id', function(req ,res){
  let index = req.params.id;
  brands.splice(index, 1);
  res.json(brands);
})



module.exports = brandRouter;
