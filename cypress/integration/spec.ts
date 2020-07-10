describe('Test', function() {
  it('should do something', function() {
    cy.visit('http://www.example.com');
    cy.contains('Example Domain').should('be.visible');
    cy.xpath('//body').should('exist');
  });
});