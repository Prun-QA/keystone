import loginPage from '../../Pages/login';
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const Login = new loginPage


Given('I navigate to the Login Page', () => {
    Login.visitLoginPage()
})

When('I enter my username', () => {
    Login.enterUsername()
})

Then('I enter my password', () => {
    Login.enterPassword()
})

Then('I enter my Token ID', () => {
    Login.enterTokenID()
})

Then('I click on the Sign in button', () => {
    Login.clickSign()
})

When('I enter invalid username',()=>{
    Login.enterInvalidUsername()
})

Then('I should see an error message',()=>{
    Login.getErrorMessage()
})

Then('I should be sign in successfully',()=>{
    Login.confirmSuccessfulLogin()

})
