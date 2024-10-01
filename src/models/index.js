const Persona = require('./persona')
const Pasaporte= require('./pasaporte')
const Empleado= require('./empleado')
const Departamento= require('./departamento')
//relacion 1:1
//persona tiene
Persona.hasOne(Pasaporte)
//pasap pertenece a
Pasaporte.belongsTo(Persona)
//relacion 1:n
//depaprtamento tiene muchos
Departamento.hasMany(Empleado)
//empleado perteneca a
Empleado.belongsTo(Departamento)



module.exports = {
    Persona,
    Pasaporte,
    Departamento,
    Empleado
}