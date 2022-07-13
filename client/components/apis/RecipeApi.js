import request from 'superagent'

export function fetchRecipe (category) {
  return request.get(`/api/v1/recipe/${category}`)
    .then(res => {
      return res.body
    })
}
