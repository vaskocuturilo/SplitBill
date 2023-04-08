import { onMainPage } from "../../support/pages/MainPage.cy"
import { onUploadSubForm } from "../../support/pages/UploadSubForm.cy"
import { onAddFriendSubForm } from "../../support/pages/AddFriendSubForm.cy"

describe('This is simple automation scripts for testing main page', () => {
    beforeEach(() => {
      cy.visit('/')   
    })

    it ('Check all elements on the main page.', ()=> {
      onMainPage.checkTitle();
      onMainPage.checkAllElements();
    })

    it ('Check upload functionality.', ()=> {
      onMainPage.checkTitle();
      onUploadSubForm.checkUploadFinctionality();
    })

    it ('Check add friend functionality.', ()=> {
      onMainPage.checkTitle();
      onAddFriendSubForm.tapPlusButton();
      onAddFriendSubForm.checkElementsOnAddFrienSubFrom();
    })
})