/// <reference types="Cypress"/>


describe('Búsqueda en Google', () => {
    it('Realiza una búsqueda en Google', () => {
      // Abre el sitio web de Google
      cy.visit('https://www.google.com/');
  
      // Ingresa un término de búsqueda en el cuadro de búsqueda y presiona enter
      cy.get("#APjFqb").type("cypress").type('{enter}')
      cy.wait(1500)
  
      // Espera a que aparezcan los resultados de búsqueda
      cy.get("#search").should('be.visible');
      cy.wait(1500)
  
      // Realiza alguna aserción en los resultados, por ejemplo, verifica que el primer resultado contenga la palabra "Cypress"
      cy.get('#search .g')
        .first()
        .should('include.text', 'Cypress');
    });
  });