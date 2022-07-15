import request from 'superagent'

export function fetchRecipe() {
  return request.get('/api/v1/recipes/').then((res) => {
    return res.body
  })
}

export function postRecipe(newRecipe) {
  return request
    .post('/api/v1/recipes')
    .send(newRecipe)
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      const errMsg = `Failed to post recipe: ${err.message}`
      console.warn(errMsg)
    })
}

export function deleteOneRecipe(id) {
  return request.delete(`/api/v1/recipes/${id}`).then((res) => res)
}
