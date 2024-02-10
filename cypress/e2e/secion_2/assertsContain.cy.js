/// <reference types="Cypress"/>

describe("", () => {
    it("Assert contain", () => {
      cy.visit("https://demoqa.com/text-box")
      cy.title('eq','ToolsQA')
      cy.wait(1000)

      cy.get("#userName").should("be.visible").type("andres")
      cy.get("#userEmail").should("be.visible").type("andresinho826@gmail.com")
      cy.get("#submit").should("be.visible").click()

      cy.get("#name").should("have.text", "andres")


    })
  })