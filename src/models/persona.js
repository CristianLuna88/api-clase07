const { Model, DataTypes } = require('sequelize')
const sequelize= require('../../config/database')
//creamos perso
class Persona extends Model {}
//def los campos
Persona.init({
    //campos y caract
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING
},{
    //coneccion con la bd y el nombre de la tabla
    sequelize,
    modelName:'persona'
})


module.exports= Persona