export class MainPage {
    
    elements = {
        title : () => cy.title(),
        plusButton: () => cy.get('[data-cy="add-friend-button"]'),
        chooseImage: () => cy.get('[data-cy="choose-image-label"]'),
        uploadForm: () => cy.get('[data-cy="upload-form"]'),
        startScanButton: () => cy.get('[data-cy="start-scan-button"]')
    }

    checkTitle() {
        this.elements.title().should('eq', 'Split bill application');
     }

    checkAllElements() {
        this.elements.plusButton().should('be.visible');
        this.elements.chooseImage().should('be.visible').and('contain', 'Choose Image');
        this.elements.uploadForm().should('be.visible');
        this.elements.startScanButton().should('be.visible').and('contain', 'Start Scan');
     }
}

export const onMainPage = new MainPage();