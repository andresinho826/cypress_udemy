describe("",() => {
    it("Testing Gmail", ()=>{
        cy.visit("https://www.gmail.com")
        cy.title('eq','Google')
        cy.wait(1000)

        cy.get('body').should("be.visible").type("andresinho826")
        cy.get('#identifierNext').should("be.visible").click()
    })

})