const express = require('express');
const productRouter = new express.Router();

const products = {eyes: "Mascara", lips:"Lipstick", face:"Foundation"}



// index= all the products
productRouter.get('/', function(req, res){
  res.json(products);
});

// show the brands
productRouter.get('/:id', function(req, res){
  let index = req.params.id;
  res.json({data: products[index]});
});

// // create
productRouter.post('/', function(req, res){
  products.push(req.body.product);
  res.json(products);
});

// UPDATE
productRouter.put('/:id', function(req, res){
  let index = req.params.id;
  products[index] = req.body.product;
  res.json({data: products});
})

// delete
productRouter.delete('/:id', function(req ,res){
  let index = req.params.id;
  products.splice(index, 1);
  res.json(products);
})


module.exports = productRouter;
