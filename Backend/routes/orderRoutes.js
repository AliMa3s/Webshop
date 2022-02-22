const express = require('express');
const orderRouter = express.Router();
const orderController = require('../controllers/orders');
const {check, validationErrors} = require('express-validator');

//GET MOVIES
orderRouter.get('/order/:id([0-9]{1})', orderController.getOrder);

//Post order and return id
orderRouter.post('/order',[
  check('email').isEmail().normalizeEmail(),
  check('firstname').trim(),
  check('lastname').trim(),
  check('street'),
  check('number').isInt(),
  check('telephone').isMobilePhone(),
],orderController.postOrder);
/* Adds movie to order */
orderRouter.post('/order/movie',[
  check('qty').isInt({min: 1}),
  check('price').isFloat()
],orderController.addMovieToOrder);



module.exports = orderRouter;
