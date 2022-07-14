exports.seed = async function (knex) {
  await knex('recipe').del()
  await knex('recipe').insert()

  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        { id: 1, category: 'vegetable' },
        { id: 2, category: 'apple' },
        { id: 3, category: 'feijoa' }
      ])
     })
 }
