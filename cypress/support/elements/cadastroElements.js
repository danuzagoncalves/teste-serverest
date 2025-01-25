class cadastroElements {

    nomeInput = () => {
        return '[data-testid="nome"]'
    }

    emailInput = () => {
        return '[data-testid="email"]'
    } 

    senhaInput = () => {
        return '[data-testid="password"]'
    }

    cadastrarButton = () => {
        return '[data-testid="cadastrar"]'
    }
    
    mensagemAlert = () => {
        return '[class="alert alert-secondary alert-dismissible"]'
    }
}
  
  export default cadastroElements;