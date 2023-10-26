/// <reference types="Cypress"/>

require('cypress-xpath')

describe("Primer reto", () => {
    it("llenando datos", () => {
        cy.visit("https://demoqa.com/webtables")
        //cy.title().should('eq',"ToolsQA")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1000)

        cy.get("#searchBox").should("be.visible").type("Cierra")
        cy.wait(1000)
        cy.get("#searchBox").should("be.visible").clear()

        

        //agregando campo
        cy.get("#addNewRecordButton").should("be.visible").click()
        cy.wait(1000)
        cy.get("#firstName").should("be.visible").
        type("Juan").type('{tab}')
        type("castillo").type('{tab}').
        type("jcastillo@gmail.com").type('{tab}').
        type("20").type('{tab}').
        type("30000").type('{tab}').type("Sistemas")
        cy.get("#submit").should("be.visible").click()

        cy.get("#searchBox").should("be.visible").type("Juan")
        cy.wait(1000)
        cy.get("#searchBox").should("be.visible").clear()

        

    })
}) // cierre de describe