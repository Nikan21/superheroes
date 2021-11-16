const express = require('express');
const superheroesRouter = express.Router();

superheroesRouter.use("/superheroes", superheroesRouter);

module.exports = superheroesRouter; 