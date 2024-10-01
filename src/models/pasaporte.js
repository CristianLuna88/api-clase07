const { Model, DataTypes } = require('sequelize')
const sequelize= require('../../config/database')
//creamos pasaporte
class Pasaporte extends Model {}
//def los campos
Pasaporte.init({
    //campos y caract
    numero: DataTypes.STRING,
    fechaExpedicion: DataTypes.DATE
    
},{
    //coneccion con la bd y el nombre de la tabla
    sequelize,
    modelName:'pasaporte'
})


module.exports= Pasaporte