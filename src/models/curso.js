const {Model,DataTypes}= require('sequelize')
const sequelize= require('../../config/database')

class Curso extends Model{}

Curso.init({
    titulo: DataTypes.STRING
},{sequelize,modelName:'cursos'})

module.exports= Curso