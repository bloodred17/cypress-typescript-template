export function test() {
    cy.visit('http://www.example.com');
    cy.contains('Example Domain').should('be.visible');
    cy.xpath('//body').should('exist');
}