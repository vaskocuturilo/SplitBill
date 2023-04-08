export class AddFriendSubForm {

    elements = {
        plusButton: () => cy.get('[data-cy="add-friend-button"]'),
        addFriendLabel: () => cy.get('[data-cy="message"]'),
        addFriendForm: () => cy.get('[data-cy="message"]'),
        addNameInput: () => cy.get('[data-cy="add-friend-name"]'),
        addFriendButton: () => cy.get('[data-cy="add-friend"]')
    }

    tapPlusButton() {
     this.elements.plusButton().should('be.visible');
     this.elements.plusButton().click();
     this.elements.addFriendForm().should('be.visible');
     }

    checkElementsOnAddFrienSubFrom() {
     this.elements.addFriendLabel().should('be.visible').and('contain', 'Add friend');
     this.elements.addNameInput().should('be.visible');
     this.elements.addFriendButton().should('be.visible');    
    }
}

export const onAddFriendSubForm = new AddFriendSubForm();