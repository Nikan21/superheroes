module.exports.getAllSuperHeroes = async (req, res, next) => {
    try {
        res.status(200).send({data: 123})
    } catch (error){
        next(error);
    }
}

module.exports.getSuperHeroesById = async (req, res, next) => {
    try{
        res.status(200).send({data: 123})
    } catch(error){
        next(error);
    }
}

module.exports.createSuperHero = async (req, res, next) => {
    try{
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