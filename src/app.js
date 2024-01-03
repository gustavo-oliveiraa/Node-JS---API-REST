// import express, { request, response } from 'express'
import express from 'express'
import conexao from '../infra/conexao.js'

const app = express()

// Indicar para o express ler body com json
app.use(express.json())

// Retornar o objeto por id, (Função auxiliar, ajuda na busca de dados)
function buscarSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id == id)
}

// Pegar a posição ou index do elemento no array por id
function buscarIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}
// C R U D => Create
app.post('/selecoes', (request, response) => {
    // selecoes.push(request.body)
    // response.status(201).send('Seleção cadastrada com sucesso!')
    const selecao = request.body
    const sql = "INSERT INTO selecoes SET ?;"
    conexao.query(sql, selecao, (error, result) => {
        if (error) {
            response.status(400).json({ 'error': error })
        } else {
            response.status(201).json(result)
        }
    })
})

// C R U D => Read
app.get('/selecoes', (request, response) => {
    // response.status(200).send(selecoes)
    const sql = "SELECT * FROM selecoes;"
    conexao.query(sql, (error, result) => {
        if (error) {
            response.status(404).json({ 'error': error })
        } else {
            response.status(200).json(result)
        }
    })
})

app.get('/selecoes/:id', (request, response) => {
    // response.json(buscarSelecaoPorId(request.params.id))
    const id = request.params.id
    const sql = "SELECT * FROM selecoes WHERE id=?;"
    conexao.query(sql, id, (error, result) => {
        const linha = result[0]
        if (error) {
            response.status(404).json({ 'error': error })
        } else {
            response.status(200).json(linha)
        }
    })
})

// C R U D => Update
app.put('/selecoes/:id', (request, response) => {
    // let index = buscarIndexSelecao(request.params.id)
    // selecoes[index].selecao = request.body.selecao
    // selecoes[index].grupo = request.body.grupo
    // response.json(selecoes)
    const id = request.params.id
    const selecao = request.body
    const sql = "UPDATE selecoes SET ? WHERE id=?;"
    conexao.query(sql, [selecao, id], (error, result) => {
        if(error) {
            response.status(400).json({ 'error': error })
        } else {
            response.status(200).json(result)
        }
    })
})

// C R U D => Delete
app.delete('/selecoes/:id', (request, response) => {
    // let index = buscarIndexSelecao(request.params.id)
    // selecoes.splice(index, 1)
    // response.send(`Seleção com id ${request.params.id} excluída com sucesso!`)
    const id = request.params.id
    const sql = "DELETE FROM selecoes WHERE id=?;"
    conexao.query(sql, id, (error, result) => {
        if(error) {
            response.status(404).json({ 'error': error })
        } else {
            response.status(200).json(result)
        }
    })
})

export default app
