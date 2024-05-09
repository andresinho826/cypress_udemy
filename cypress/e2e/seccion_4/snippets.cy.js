<reference types="Cypress"/>

//require('cypress-xpath')
//require('cypress-plugin-tab')

describe("Configuración y uso de Snippets", () => {
    it("Snippets Uno", () => {
        let tiempo = 1500
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)
    })
})