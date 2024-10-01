const {Model, DataTypes}= require('sequelize')
const sequelize= require('../../config/database')

class Estudiante extends Model{}

Estudiante.init({
    nombre: DataTypes.STRING
},{sequelize,modelName:'estudiantes'})

module.exports= Estudiante