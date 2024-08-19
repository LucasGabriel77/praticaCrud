const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Produto = db.define('produto', {
    codProduto:{
        type : DataTypes.BIGINT(),
        primaryKey: true,
        autoIncrement: true
    },
    nome:{ 
        type : DataTypes.STRING(100),
        allowNull: false
    },
    quantidade : {
        type : DataTypes.INTEGER(8),
        allowNull: false
    },
    preco : {  
        type : DataTypes.DECIMAL(10,2),
        allowNull: false
    }
},{
    tableName : 'produtos',
    createdAt : false,
    updatedAt : false,
})

module.exports = Produto