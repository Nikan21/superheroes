const superheroesRouter = require('express').Router();
const superheroesController = require('../controllers/superheroes')

superheroesRouter
.route("/")
.get(superheroesController.getAllSuperHeroes)
.post(validateHero, superheroesController.createSuperHero)

.route("/:id")
.get(superheroesController.getSuperHeroesById)
.patch(validateHero, superheroesController.updateSuperHero)
.delete(superheroesController.deleteSuperHero)

module.exports = superheroesRouter;