const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('atividade', 'root', 'senai',{
    host : "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(()=>{
    console.log('Servidor conectado com o banco')
}).catch((err)=>{
    console.error('erro ao conectar o banco', err)
})

module.exports = sequelize