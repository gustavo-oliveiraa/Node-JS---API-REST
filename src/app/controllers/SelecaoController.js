import conexao from '../database/conexao.js'

class SelecaoController {

  index(request, response) {
    const sql = "SELECT * FROM selecoes;"
    conexao.query(sql, (error, result) => {
      if (error) {
        response.status(404).json({ 'error': error })
      } else {
        response.status(200).json(result)
      }
    })
  }

  show(request, response) {
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
  }

  store(request, response) {
    const selecao = request.body
    const sql = "INSERT INTO selecoes SET ?;"
    conexao.query(sql, selecao, (error, result) => {
      if (error) {
        response.status(404).json({ 'error': error })
      } else {
        response.status(201).json(result)
      }
    })
  }

  update(request, response) {
    const id = request.params.id
    const selecao = request.body
    const sql = "UPDATE selecoes SET ? WHERE id=?;"
    conexao.query(sql, [selecao, id], (error, result) => {
      if (error) {
        response.status(404).json({ 'error': error })
      } else {
        response.status(200).json(result)
      }
    })
  }

  delete(request, response) {
    const id = request.params.id
    const sql = "DELETE FROM selecoes WHERE id=?;"
    conexao.query(sql, id, (error, result) => {
      if (error) {
        response.status(404).json({ 'error': error })
      } else {
        response.status(200).json(result)
      }
    })
  }
}

// padrão Singleton
export default new SelecaoController()
