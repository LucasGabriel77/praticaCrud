const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Pedido = db.define('pedido', {
    codPedido: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    numPedido: {
        type : DataTypes.INTEGER(8),
        allowNull: false
    },
    data : {
        type : DataTypes.DATE,
        allowNull: false
    },
    nomeProd: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    nomeForn: {
        type : DataTypes.STRING(100),
        allowNull: false
    },
    quantidadeProd :{
        type: DataTypes.INTEGER(8),
        allowNull: false
    },
    produtoId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references:{
            model : 'produtos',
            key: 'codProduto'
        }
    },
    fornecedorId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references:{
            model: 'fornecedores',
            key: 'codFornecedor'
        }
    }

},{
    tableName: 'pedidos',
    createdAt: false,
    updatedAt: false
})

module.exports = Pedido