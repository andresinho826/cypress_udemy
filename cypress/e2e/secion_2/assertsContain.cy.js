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

    it.only("Assert have.text mas then", () => {
      cy.visit("https://demoqa.com/text-box")
      cy.title('eq','ToolsQA')
      cy.wait(1000)

      
      cy.get("#userName").should("be.visible").type("andres")

      cy.get("#userName").should("contain.value", "andres").then(()=>{
        cy.get("#userEmail").should("be.visible").type("andresinho826@gmail.com")
        cy.get("#submit").should("be.visible").click()
      })

      /*cy.get("#userName").should("have.value", "andres").then(()=>{
        cy.get("#userEmail").should("be.visible").type("andresinho826@gmail.com")
        cy.get("#submit").should("be.visible").click()
        
        contain = este te acepta el valor a validar con mas campos example = andresssss
        have= te obliga a que los campos a comparar sean necesariamente iguales example = andres*/
      


    })


  })