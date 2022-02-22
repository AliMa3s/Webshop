const express = require('express');
const movieRouter = express.Router();
const MovieController = require('../controllers/movies');
//Get Movies
movieRouter.get('/movies', MovieController.getAllMovies);

module.exports = movieRouter;
