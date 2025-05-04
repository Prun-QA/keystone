//Login elements
class loginPage {
    usernameField = "input[name='username']";
    passwordField = "input[placeholder='**********']";
    tokenId = "input[name='tokenId']";
    signinButton = "button[type='submit']"
    username = "prunedgesupport@mailinator.com";
    password = "Password123@";
    token ="123456789"
    invalidUsername = "testing@gmail.com"
    errorModal = "div[class='text-center']"
    success = "Successfully Login"



    visitLoginPage(){
        cy.visit('/')
        cy.get('body > div:nth-child(1) > section:nth-child(7) > div:nth-child(2) > div:nth-child(1)', { timeout: 10000 }).should("contain", "Getting Started")
    }

    enterUsername(){
        cy.get(this.usernameField,{ timeout: 10000 }).type(this.username)
    }

    enterPassword(){
        cy.get(this.passwordField).type(this.password)
    }

    enterTokenID(){
        cy.get(this.tokenId).type(this.token)
    }
    clickSign(){
        cy.get(this.signinButton).click()
    }

    enterInvalidUsername(){
        cy.get(this.usernameField).type(this.invalidUsername)
    }

    getErrorMessage(){
        cy.get(this.errorModal).should('contain', 'Wrong User Email or Password')
    }

    confirmSuccessfulLogin(){
        cy.contains(this.success).should('be.visible')
    }

}
export default loginPage