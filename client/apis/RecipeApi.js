import request from 'superagent'

export function fetchRecipe () {
  return request.get(`/api/v1/recipes/`)
    .then((res) => {
      return res.body
    })}

// export function getCategory (category){
//   return request.get(`/api/v1/recipes/${category}`)
//    .then((res)=>{
//     console.log(res)
//     return res.body
//    })
// }