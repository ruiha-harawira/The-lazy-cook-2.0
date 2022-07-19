import React from "react"
// import nock from "nock"
import { fetchRecipe } from "../apis/RecipeApi"
import { expect } from "@jest/globals"

describe("fetchRecipe", () => {
  test("dispatches fetchRecipe action", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(fetchRecipe).toHaveBeenCalled()
  })
})

// test('page header includes recipe', () => {
//   render(<Provider store={store}><App /></Provider>)
//   const heading = screen.getByRole('heading')
//   expect(heading.innerHTML).toMatch(/recipes/)
// })

// test('renders an <li> for each fruit', () => {
//   const fruits = ['orange', 'persimmons', 'kiwi fruit']
//   jest.spyOn(store, 'getState')
//   store.getState.mockImplementation(() => ({ fruits }))

//   render(<Provider store={store}><App /></Provider>)
//   const li = screen.getAllByRole('listitem')
//   expect(li).toHaveLength(3)
// })
