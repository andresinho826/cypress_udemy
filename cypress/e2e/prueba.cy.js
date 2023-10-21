/// <reference types="Cypress"/>
require('cypress-xpath')

describe("probando google", () => {
    it("buscar palabra", () => {
      cy.visit("https://google.com.co")
      cy.get("#APjFqb").type("cypress").type('{enter}')
      //cy.text().should('eq','Cypress: JavaScript Component Testing and E2E Testing ...')
      cy.get("//*[@class='LC20lb MBeuO DKV0Md']").click()
    })
  })