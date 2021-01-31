describe('Adding, completing, uncompleting and deleting todos', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('can add a new todo', () => {
    cy.get('input[name="task"]').type('washing up')
    cy.get('input[name="description"]').type('do the washing up')
    cy.get('input[name="date"]').type('2021-01-30')
    cy.get('button[name="add"]').click()
    cy.get('li').contains('washing up')
    cy.get('li').contains('do the washing up')
    cy.get('li').contains('2021-01-30')
  })

  it('can complete a todo', () => {
    cy.get('li').contains('do the washing up')
    cy.get('button[name="complete"]').click()
    cy.get('.completed')
    cy.get('span[class="completed"').should('have.length', 1)
  })

  it('can uncomplete a todo', () => {
    cy.get('li').contains('do the washing up')
    cy.get('button[name="complete"]').click()
    cy.get('span').not('.completed').should('have.length', 1)
  })

  it('can delete a todo', () => {
    cy.get('li').contains('do the washing up')
    cy.get('button[name="delete"]').click()
    cy.get('button[name="complete"]').should('not.exist')
    cy.get('button[name="delete"]').should('not.exist')
  })
})
