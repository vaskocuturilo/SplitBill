
export class UploadSubFrom {

    elements = {
        uploadInput: () => cy.get('#file-uploader'),
        draggable: () => cy.get('[data-cy="draggable-class"]', { timeout: 150000 }),
        startScanButton: () => cy.get('[data-cy="start-scan-button"]')
     }

     checkUploadFinctionality() {
        this.elements.uploadInput().selectFile('cypress/fixtures/upload.jpg', { force: true });
        this.elements.startScanButton().click({ force: true })
        this.elements.draggable().should('be.visible').and('contain', '$25.50,$299.00,$3299,$6.50,$363.99,$400.00,$36.01');
    }
}

export const onUploadSubForm = new UploadSubFrom();
