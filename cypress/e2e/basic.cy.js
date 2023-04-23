describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('references the stupid sink thing', () => {
    cy.contains('Sink');
  })
})
