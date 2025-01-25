describe('API usuarios', () => {
    let usuarioId;
    it('busca usuários corretamente', () => {
      cy.request({
        method: 'GET',
        url: 'https://serverest.dev/usuarios'
      }).then((response) => {

        expect(response.status).to.equal(200);

      })
    })


    it('cadastra usuário corretamente', () => {
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: {
            "nome": "Usuario Teste",
            "email": "novoteste@teste.com.br",
            "password": "1234",
            "administrador": "true"
          },
        
      }).then((response) => {
   
        expect(response.status).to.eq(201);

        usuarioId = response.body._id;

        expect(response.body).to.have.property('_id');
        expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');

      })
    })

    it('Deve deletar o usuário com sucesso', () => {

        cy.request({
            method: 'DELETE',
            url: `https://serverest.dev/usuarios/${usuarioId}`
      
        }).then((response) => {

        expect(response.status).to.be.eq(200);
        expect(response.body).to.have.property('message', 'Registro excluído com sucesso');
    })

})

});