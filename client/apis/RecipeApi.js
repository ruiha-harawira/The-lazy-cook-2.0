import request from 'superagent'

export function fetchRecipe() {
  return request.get('/api/v1/recipes/').then((res) => {
    return res.body
  })
}

// export function getCategory (category){
//   return request.get(`/api/v1/recipes/${category}`)
//    .then((res)=>{
//     console.log(res)
//     return res.body
//    })
// }
export function addRecipe(recipe) {
  return request
    .post('/api/addRecipe')
    .send(recipe)
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      const errMsg = `Failed to post resipe: ${err.message}`
      console.warn(errMsg)
    })
}
