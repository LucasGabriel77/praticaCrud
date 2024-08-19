const express = require('express')
const app = express()
const cors = require('cors')
const conn = require('./db/conn')
const Pedido = require('./model/Pedido')
const Produto = require('./model/Produto')
const controllerFornecedor = require('./controller/controllerFornecedor')

const PORT = 3000
const hostname = 'localhost'

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.post('/fornecedor', controllerFornecedor.cadastarFornecedor)
app.get('/fornecedores', controllerFornecedor.listarFornecedores)
app.get('/fornecedor', controllerFornecedor.consultarFornecedor)
app.delete('/fornecedor', controllerFornecedor.apagarFornecedor)
app.put('/fornecedor', controllerFornecedor.atualizarFornecedor )

app.get('/', (req,res)=>{
    res.status(200).json({message : 'Servidor Ativo '})
})

conn.sync().then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando em ${hostname} : ${PORT}`)
    } )
}).catch((err)=>{
    console.error('erro ao conectar com o banco', err)
})