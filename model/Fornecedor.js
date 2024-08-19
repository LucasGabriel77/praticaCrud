const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Fornecedor = db.define('fornecedor',{
    codFornecedor: {
        type : DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type : DataTypes.STRING(100),
        allowNull: false
    },
    cnpj: {
        type: DataTypes.STRING(18),
        allowNull: false
    }
},{
    tableName: 'fornecedores',
    createdAt: false,
    updatedAt:false
})

module.exports = Fornecedor