import express from 'express'

const app = express()

// criar rota padrão ou raiz
app.get('/', (request, response) => {
    response.send('Curso de Node JS')
})

app.get('/selecoes', (request, response) => {
    response.send('Lista de seleções')
})

export default app
