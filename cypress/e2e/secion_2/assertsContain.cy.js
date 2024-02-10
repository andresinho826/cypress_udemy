/// <reference types="Cypress"/>

describe("", () => {
    it("Assert contain", () => {
      cy.visit("https://demoqa.com/text-box")
      cy.title('eq','ToolsQA')
      cy.wait(1000)


    })
  })