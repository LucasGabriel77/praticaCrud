const { syncBuiltinESMExports } = require('module')
const conn = require('./db/conn')
const {Produto, Pedido, Fornecedor} = require('./model/associacao')

async function Syncdatabase(){
    try {
        await conn.sync({force: true})
    } catch (err) {
        console.error('erro ao conectar com o banco', err)
    }finally{
        conn.close('conexão com o banco fechada')
    }
}

Syncdatabase()