describe('Starting a new campaign', () => {
  it('prompts the user with about recycling', () => {
    cy.visit('http://localhost:3000');
    cy.contains('NEED RECYCLING?');
    cy.contains('Recruit, Request, Recycle');
    cy.contains(
      'We have a mission to change Denver\'s low recycling rate by making it easy for you and your neighbors to petition your landlord for recyling for your building.'
    );
  });

  describe('When Searching an Address', () => {
    it('Should fill out search box and click search and visit choose campaign page', () => {
      cy.get('.search_input')
        .type('Denver')
        .should('have.value', 'Denver')
        .then(() => {
          cy.get('.search_button').click(() => {
            cy.visit('/choose-campaign');
          });
        });
    });
  });
});
