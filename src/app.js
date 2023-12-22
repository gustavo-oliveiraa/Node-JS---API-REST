import express, { request, response } from 'express'

const app = express()

// Indicar para o express ler body com json
app.use(express.json())

// mock  ==> termo para mockar dados, estrutura basica de dados
const selecoes = [ // array de objetos
    { id: 1, selecao: 'Brasil', grupo: 'G' },
    { id: 2, selecao: 'Suíça', grupo: 'G' },
    { id: 3, selecao: 'Camarões', grupo: 'G' },
    { id: 4, selecao: 'Sérvia', grupo: 'G' }
]

// Função auxiliar, ajuda na busca de dados
// Retornar o objeto por id
function buscarSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id == id)
}

// Pegar a posição ou index do elemento no array por id
function buscarIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}
// C R U D => Create
app.post('/selecoes', (request, response) => {
    selecoes.push(request.body)
    response.status(201).send('Seleção cadastrada com sucesso!')
})

// C R U D => Read
// Criar rota padrão ou raiz
app.get('/', (request, response) => {
    response.send('Curso de Node JS')
})

app.get('/selecoes', (request, response) => {
    response.status(200).send(selecoes)
})

app.get('/selecoes/:id', (request, response) => {
    response.json(buscarSelecaoPorId(request.params.id))
})

// C R U D => Update
app.put('/selecoes/:id', (request, response) => {
    let index = buscarIndexSelecao(request.params.id)
    selecoes[index].selecao = request.body.selecao
    selecoes[index].grupo   = request.body.grupo
    response.json(selecoes)
})

// C R U D => Delete
app.delete('/selecoes/:id', (request, response) => {
    let index = buscarIndexSelecao(request.params.id)
    selecoes.splice(index, 1)
    response.send(`Seleção com id ${request.params.id} excluída com sucesso!`)
})


export default app
