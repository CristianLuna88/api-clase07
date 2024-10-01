const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

class Departamento extends Model{}

Departamento.init({
    nombre: DataTypes.STRING
},
{sequelize,modelName:'departamento'}
)

module.exports= Departamento