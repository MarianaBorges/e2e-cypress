describe('Registration', ()=>{
    beforeEach(() => {
        cy.visit('/');
    });

    it('verifica mensagem de validação',() => {
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('verifica mensagem de email inválido', () =>{
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname="email"]').type('mariadasilva');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verifica mensagem de senha com menos de 8 caracteries', () =>{
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it('verifica mensagem de erro com user name maiusculo', () =>{
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname="userName"]').type('Maria');
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

    const users = require('../../fixtures/user.json');

    users.forEach(user => {
        it(`Criar novo usuário  ${user.name}`,() => {
            cy.register(user.email,user.fullName, user.userName, user.password);
        })
    })
    
})