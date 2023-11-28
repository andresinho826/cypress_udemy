/// <reference types="Cypress"/>

// require('cypress-xpath')
// require('cypress-plugin-tab')

describe("", () => {
    it("Reto de los select", () => {
      cy.visit("https://seleniumeasy.com/test/jquery-dual-list-box-demo.html")
      cy.title().should('eq','Selenium Easy - Jquery Dual List Box Demo')
      cy.wait(1000)

      cy.get(".pickData").select(["Maria eduarda","Giovanna","Manuela"]).then(()=>
      {
        cy.get(".pAdd").should("be.visible").click().then(()=>{
          cy.wait(2000)
          cy.get(".pAddAll").click().then(()=>{
            cy.get(".pRemoveAll").click().then(()=>{
              cy.wait(2000)
              cy.log("Se movieron todos los elementos")
            })
          })
        })
      })
    })
  })