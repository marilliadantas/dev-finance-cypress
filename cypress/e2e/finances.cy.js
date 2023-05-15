describe('Transações', () => {

    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/');
    });
    it('Cadastrar uma entrada', () => {
        cy.criarTransacao("Freelancer", 250);
        cy.get("tbody tr td.description")
            .should("have.text", "Freelancer");
    }); 

    it('Cadastrar uma saída', () => {
        cy.criarTransacao("Cinema", -100);
        cy.get("tbody tr td.description")
            .should("have.text", "Cinema");
    });

    it('Excluir transação', () => {
        cy.criarTransacao("Academia", 120)
        cy.criarTransacao("Internet", 80)
        cy.contains(".description", "Academia")
            .parent()
            .find('img').click();

        cy.get('tbody tr')
            .should("have.length", 1)
    });
});

