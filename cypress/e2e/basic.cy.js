describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('references the stupid sink thing', () => {
    cy.get('img')
      .should('be.visible')
      .and('have.prop', 'naturalWidth')
      .should('be.greaterThan', 0)
  })
})
