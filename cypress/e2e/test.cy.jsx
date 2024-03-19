describe('first cypress test', () => {
	it('Visits home url and checks navbar exists', () => {
		cy.visit('/');
		cy.get('.navbar').should('exist');
	});
});

describe('first cypress test', () => {
	it('Visits home url and checks navbar exists', () => {
		cy.visit('/characters');
		cy.get('.navbar').should('exist');
	});
});
