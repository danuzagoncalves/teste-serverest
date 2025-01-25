class loginElements {

    emailInput = () => {
        return '[data-testid="email"]'
    }

    senhaInput = () => {
        return '[data-testid="senha"]'
    }

    entrarButton = () => {
        return '[data-testid="entrar"]'
    }
    
    logoutButton = () => {
        return '[data-testid="logout"]'
    }

    mensagemAlert = () => {
        return '[class="alert alert-secondary alert-dismissible"]'
    }
}
  
  export default loginElements;