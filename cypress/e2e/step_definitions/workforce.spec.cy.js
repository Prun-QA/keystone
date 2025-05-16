import workforceManagement from "../../Pages/workforceMgt";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const wrkMgt = new workforceManagement


When('I click on Workforce Management', () => {
    wrkMgt.clickWorkForceBtn()
})

Then('I click on Employee Data Management', () => {
    wrkMgt.clickemployeeDataMgt()
})

Then('I create a single Profile', () => {
    wrkMgt.createSingleProfile()
    wrkMgt.enterBasicInformation()
    wrkMgt.enterResidentialAddress()
})

Then('I enter my work details', () => {
    wrkMgt.workDetails()
})



When('I click on Medical Management', () => {
    wrkMgt.clickMedicalMgt()
})
Then('I click on HMO configuration and setup', () => {
    wrkMgt.clickHmoConfig()
})
Then('I create HMO', () => {
    wrkMgt.createHMO()
})


//PROMOTION MANAGER
When('I click on Promotion Manager', () => {
    wrkMgt.clickPromotionManager()

})
Then('I click on Request Button', () => {
    wrkMgt.clickRequestBtn()
})
Then('I click on Single Request', () => {
    wrkMgt.clickSingleRequest()
})
Then('I fill the Update Employee Job Grade form', () => {
    wrkMgt.selectEmploymentName()
    wrkMgt.selectJobGrade()
    wrkMgt.enterJobTitle()
    wrkMgt.enterDate()
    wrkMgt.enterRemark()
})
Then('I click on Update to save the Promotion', () => {
    wrkMgt.clickUpdateBtn()
})