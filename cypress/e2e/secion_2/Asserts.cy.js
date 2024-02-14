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

    it("assert length y el css", ()=> {

      // este ejercion nos ayuda para validar el tamaño de una tabla
      cy.visit("https://www.seleniumeasy.com/test/table-pagination-demo.html")
      cy.title().should('eq', 'Selenium Easy - Table with pagination Demo')
      cy.wait(1000)

      cy.get("#myTable >tr >td").should("have.length", 91).and("have.css", "padding", "8px")
    })

    it("COntains", ()=> {
      let tiempo=1000
      // con este ejercicio lo que hacemos es omitir ventanas de emergencia o pop up

      cy.visit("https://www.seleniumeasy.com/test/basic-first-form-demo.html")
      cy.title().should('eq', 'Selenium Easy - Simple Form to automate using Selenium')
      cy.wait(tiempo)

      //eliminando la ventana emergente
      cy.get(".at-cm-no-button").should("be.visible").click({force:true})

      cy.get(".form-group > #user-message").should("be.visible").type("Demo del contenido")

      //utilizamos el contain
      cy.contains("[type='button']", "Show Message").should("be.visible").click({force:true})

      
    })


//lastOne
  })