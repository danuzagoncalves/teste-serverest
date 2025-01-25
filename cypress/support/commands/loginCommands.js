import loginElements from "../../support/elements/loginElements"
const LoginElements = new loginElements

Cypress.Commands.add('login', (email, senha) => {
    cy.get(LoginElements.emailInput()) 
    .type(email)

   cy.get(LoginElements.senhaInput())
    .type(senha)

   cy.get(LoginElements.entrarButton()).click()

  });