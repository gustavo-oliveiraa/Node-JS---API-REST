import express, { request, response } from 'express'

const app = express()

// mock  ==> termo para mockar dados, estrutura basica de dados
const selecoes = [ // array de objetos
    { id: 1, selecao: 'Brasil', grupo: 'G' },
    { id: 2, selecao: 'Suíça', grupo: 'G' },
    { id: 3, selecao: 'Sérvia', grupo: 'G' },
    { id: 4, selecao: 'Camarões', grupo: 'G' },
]

// criar rota padrão ou raiz
app.get('/', (request, response) => {
    response.send('Curso de Node JS')
})

app.get('/selecoes', (request, response) => {
    response.status(200).send(selecoes)
})

app.post('/selecoesEnvio', (request, response) => {
    selecoes.push(request.body)
    response.status(201).send('Seleção cadastrada com sucesso!')
})

export default app
