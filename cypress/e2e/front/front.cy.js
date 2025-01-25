import cadastroElements from "../../support/elements/cadastroElements"
const CadastroElements = new cadastroElements
import loginElements from "../../support/elements/loginElements"
const LoginElements = new loginElements

describe('Teste de cadastro de usuário', () => {

  beforeEach(() => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
  })

  it('Deve preencher o formulário com email já cadastrado', () => {

    cy.get(CadastroElements.nomeInput()) 
      .type('teste')

    cy.get(CadastroElements.emailInput())
      .type('teste@teste.com')

    cy.get(CadastroElements.senhaInput())
      .type('123456')

    cy.get(CadastroElements.cadastrarButton()).click()

    cy.wait(3000)
    cy.get(CadastroElements.mensagemAlert())
      .should('contain', 'Este email já está sendo usado');
    
  })

})

describe('Teste de login', () => {

  beforeEach(() => {
    cy.visit('https://front.serverest.dev/login')
  })

  it('Deve preencher login e senha com usuário e senha válidos', () => {

    cy.login('teste@teste.com', '123456');

    cy.get(LoginElements.logoutButton())
      .should('be.visible')

  })

  it('Deve preencher login com email não cadastrado', () => {

    cy.login('dnz.gaia@gmail.com', '123456')

    cy.get(LoginElements.mensagemAlert())
      .should('contain', 'Email e/ou senha inválidos');

  })

})