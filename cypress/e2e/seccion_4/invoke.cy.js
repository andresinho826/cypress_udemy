// <reference types="Cypress"/>

// require('cypress-xpath')
// require('cypress-plugin-tab')

describe("Invoke seccion", () => {
    it("Invoke ocultar y mostrar Reto", () => {
        let tiempo=1500

        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should('eq','Input Validation')
        cy.wait(tiempo)

        cy.get("[for='surname']").invoke("hide")
        cy.get("#surname").invoke("hide")
        cy.wait(tiempo)

        cy.get("#firstname").should("be.visible").type("carlos").then(()=>{
            cy.wait(tiempo)
            cy.get("[for='surname']").invoke("show", "6s")
            cy.get("#surname").invoke("show", "8s")
            cy.wait(tiempo)
            cy.get("#surname").type("Castillo murillo")
            cy.wait(tiempo)
        })
    })
  })