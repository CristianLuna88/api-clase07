const { Model, DataTypes } = require('sequelize')
const sequelize= require('../../config/database')
//creamos perso
class Empleado extends Model {}
//def los campos
Empleado.init({
    //campos y caract
    nombre: DataTypes.STRING,
    puesto: DataTypes.STRING
},
//coneccion con la bd y el nombre de la tabla
{sequelize, modelName:'empleado'})


module.exports= Empleado