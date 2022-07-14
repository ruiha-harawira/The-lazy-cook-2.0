import request from 'superagent'

export function fetchRecipe () {
  return request.get(`/api/v1/recipes/`)
    .then((res) => {
      console.log(res)
      return res.body
    })}
