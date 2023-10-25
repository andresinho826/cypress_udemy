/// <reference types="Cypress"/>

require('cypress-xpath')

describe("Segundo reto", () => {
    it("Probando la aplicacion", () => {
      cy.visit("http://computer-database.gatling.io/computers")
      cy.title().should('eq', 'Computers database')
      cy.wait(1500)

      //buscando
      cy.xpath("//input[contains(@id,'searchbox')]").type("ACE")
      cy.get("#searchsubmit").should("be.visible").click()

      //add
      cy.get("#add").should("be.visible").click()

    })
  })