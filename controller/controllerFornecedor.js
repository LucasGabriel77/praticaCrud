const { where, Model } = require('sequelize')
const { Fornecedor } = require('../model/Fornecedor')

const cadastarFornecedor = async (req,res)=>{
    const dados = req.body
    console.log(dados)
    try {
        const pesq = await Fornecedor.create(dados,{raw : true})
        console.log(pesq)
        res.status(200).json(pesq)
    } catch (err) {
        console.error('erro ao gravar Fornecedor', err)
        res.status(500).json({message : 'erro ao gravar Fornecedor'})
    }
}

const listarFornecedores = async(req,res)=>{
    try {
        const pesq = await Fornecedor.findAll()
        res.status(200).json(pesq)
    } catch (err) {
        console.error('erro ao listar Fornecedor', err)
        res.status(500).json({message : 'erro ao listar Fornecedor'})
    }
}

const consultarFornecedor = async(req,res)=>{
    const dados = req.query
    console.log(dados)
    try {
        const pesq = await Fornecedor.findOne({where: {nome: dados.nome}})
        if (pesq === null) {
            res.status(404).json({message : 'Usuario não encontrado'})
        } else {
            res.status(200).json(pesq)
        }
    } catch (err) {
        console.error('erro ao listar Fornecedor', err)
        res.status(500).json({message : 'erro ao listar Fornecedor'})
    }
}

const apagarFornecedor = async(req,res)=>{
    const dados = req.params
    console.log(dados)
    try {
        const pesq = await Fornecedor.findByPk(dados.id)
        if (pesq === null) {
            res.status(404).json({message : 'Usuario não encontrado'})    
        } else {
            await Fornecedor.destroy({where : {codFornecedor: dados.id}})
            res.status(200).json({message : 'Usuario excluido'})
        }
    } catch (err) {
        console.error('erro ao apagar Fornecedor', err)
        res.status(500).json({message : 'erro ao apagar Fornecedor'})
    }
}

const atualizarFornecedor = async(req,res)=>{
    const dados = req.body
    console.log(dados)
    try {
        const pesq = await Fornecedor.findByPk(dados.codFornecedor)
        if (pesq === null) {
            res.status(404).json({message : 'erro ao achar fornecedor'})
        } else {
            await Fornecedor.update(dados, {where : { codFornecedor: dados.codFornecedor}})
            const pesq2 = await Fornecedor.findByPk(dados.codFornecedor)
            res.status(200).json(pesq2)
        }
    } catch (err) {
        console.error('erro ao atualizar Fornecedor', err)
        res.status(500).json({message : 'erro ao atualizar Fornecedor'})
    }
}

module.exports = { cadastarFornecedor, listarFornecedores, consultarFornecedor, apagarFornecedor, atualizarFornecedor }