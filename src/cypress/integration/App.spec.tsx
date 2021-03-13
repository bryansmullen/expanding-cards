export {};

it('should render 5 panels to the DOM', () => {
    cy.visit('http://localhost:3000');
    cy.get('.panel').should('exist');
    cy.get('.panel').should('have.length', 5);
});
