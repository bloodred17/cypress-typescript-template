export function test() {
    cy.visit('https://www.saucedemo.com/');
    // cy.contains('Example Domain').should('be.visible');
    cy.waitUntil(() => cy.xpath('//form').as('form')).should('exist');
    cy.xpath('//input[@placeholder="Username"]').clear().type('standard_user');
    cy.xpath('//input[@placeholder="Password"]').clear().type('secret_sauce');
    cy.xpath('//input[@type="submit"]').click();
    cy.waitUntil(() => cy.xpath('//button[contains(text(),"Open Menu")]')).click();
    cy.waitUntil(() => cy.xpath('//a[contains(text(), "Logout")]')).click();
}
    