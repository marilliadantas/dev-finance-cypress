Cypress.Commands.add('criarTransacao', (descricao, valor) => {
    cy.contains("Nova Transação").click();
    cy.get('#description').type(descricao);
    cy.get('#amount').type(valor);
    cy.get('#date').type("2023-05-14"); // yyyy-mm-dd
  
    cy.contains('button', "Salvar").click();
  });
  
/*  function criarTransacao(descricao, valor){
    cy.contains("Nova Transação").click();
    cy.get('#description').type(descricao);
    cy.get('#amount').type(valor);
    cy.get('#date').type("2023-05-14"); // yyyy-mm-dd

    cy.contains('button', "Salvar").click();
}*/