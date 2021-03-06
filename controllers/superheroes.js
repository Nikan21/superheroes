const {Superhero} = require('../models')


module.exports.getAllSuperHeroes = async (req, res, next) => {
    try {
        const supHero = await Superhero.findAll()
        res.status(200).send({data: 123})
    } catch (error){
        next(error);
    }
}

module.exports.getSuperHeroesById = async (req, res, next) => {
    try{
        const supHero = await Superhero.findAll({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send({data: 123})
    } catch(error){
        next(error);
    }
}

module.exports.createSuperHero = async (req, res, next) => {
    try{
        const supHero = await Superhero.findAll()
        res.status(200).send({data: 123})
    } catch(error){
        next(error);
    }
}

module.exports.updateSuperHero= async (req, res, next) => {
    try{
        res.status(200).send({data: 123})
    } catch(error){
        next(error);
    }
}

module.exports.deleteSuperHero = async (req, res, next) => {
    try{
        res.status(200).send({data: 123})
    } catch(error){
        next(error);
    }
}