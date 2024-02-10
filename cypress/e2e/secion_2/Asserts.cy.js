/// <reference types="Cypress"/>

// require('cypress-xpath')
// require('cypress-plugin-tab')

describe("", () => {
    it.only("Assert contains", () => {
      cy.visit("https://automationpractice.com/index.php")
      cy.title().should('eq','My store')
      cy.wait(1000)

      cy.get("#block_top_menu").contains("Women").click()

    })


    it("Assert find, eq", () => {
      cy.visit("https://automationpractice.com/index.php")
      cy.title().should('eq','My store')
      cy.wait(1000)

      //cy.get(".product-container").click()
      //cy.get(".product-container").first()
      //cy.get(".product-container").find(".product-image-container").find("Fadded short Sleeve T-shirts")

      //con el eq, podemos seleccinar un elemento como si fuera un array ( seleccionar la posicion)
      cy.get(".product-container").find(".product-image-container").eq(0).click()

    })

    it("Assert text part 2", () => {
      cy.visit("https://automationpractice.com/index.php")
      cy.title().should('eq','My store')
      cy.wait(1000)

      //cy.get(".product-container").click()
      //cy.get(".product-container").first()
      //cy.get(".product-container").find(".product-image-container").find("Fadded short Sleeve T-shirts")

      //con el eq, podemos seleccinar un elemento como si fuera un array ( seleccionar la posicion)
      cy.get(".product-container").find(".product-image-container").eq(2).click()

      //cy.get("#product_condition").find("New")

// aqui estamos evaluando si un texto esta presente en la pagina web (video 96= asserts text_p2)
      cy.get("#product_condition .editable").then((e)=>{
        //cy.log(e.text())
        let estado=e.text()
        //cy.log(estado)

        if(estado == "New"){
          cy.log("el vestido es Nuevo")
        }

      })

    })

    it("Assert contain", () => {
      cy.visit("https://demoqa.com/text-box")
      //cy.title().should('eq','ToolsQA')
      cy.wait(1000)

      //cy.get("#userName").should("be.visible").type("andres")
      //cy.get("#userEmail").should("be.visible").type("andresinho826@gmail.com")
      //cy.get("#submit").should("be.visible").click()

      //cy.get("#name").should("have.text", "andres")

    })



//lastOne
  })