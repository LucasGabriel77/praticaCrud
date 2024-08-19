const Pedido = require('./Pedido')
const Produto = require('./Produto')
// const Fornecedor = require('./Fornecedor')   

Fornecedor.hasMany(Pedido, {
    foreignKey: 'fornecedorId',
    as: 'pedidos',
    onDelete: 'CASCADE'
})

Pedido.belongsTo(Fornecedor,{
    foreignKey: 'fornecedorId',
    as: 'fornecedor',
    allowNull: false
})

Produto.hasMany(Pedido,{
    foreignKey: 'produtoId',
    as: 'pedidos',
    onDelete: 'CASCADE'
})

Pedido.belongsTo(Produto, {
    foreignKey: 'produtoId',
    as: 'produto',
    allowNull: false
})

module.exports = {Fornecedor, Pedido, Produto}