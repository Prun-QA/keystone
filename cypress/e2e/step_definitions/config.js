import configuration from "../../Pages/configuration";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const Config = new configuration

When('I click on Configuration', () => {
    Config.clickConfig()
})
Then('I click on Job Grades', () => {
    Config.clickJobgrade()
})
Then('I click on Create Job Grade button', () => {
    Config.clickCreateJob()
})
Then('I fill the Job Grade Details', () => {
    Config.enterJobTitle()
    Config.enterJobGradeID()
    Config.selectEmploymentCategory()
})
Then('I click on Create', () => {
    Config.clickCreateButton()
})
Then('I should see the success modal and Click Done', () => {
    Config.confirmCreation()
})

Then('I disable a Job Grade', () => {
    Config.clickToDisable()
})

Then('I activate a Job Grade', () => {
    Config.clickToActivate()
})

When("I search for a Job Grade", () => {
    Config.clickSearchBox()

})
Then('I confirm it return the correct Job Grade', () => {
    Config.searchConfirm()
})

When('I click on Job Role', () => {
    Config.clickJobRole()
})
Then('I click on Create Job Role button', () => {
    Config.clickCreateJobRole()
})

Then('I fill the Job Role details', () => {
    Config.enterJobRoleName()
    Config.enterJobRoleCode()
    Config.selectOrganisationLevel()
    Config.selectReportto()
    Config.enterDescription()

})

Then('I click on create', () => {
    Config.clickCreateButton()
})

Then('I should see the success modal and click Done', () => {
    Config.confirmCreation()
})

Then('I edit the Job Role', () => {
    Config.editJobRole()
    Config.confirmCreation()
})

Then('I disable a Job Role', () => {
    Config.disableJobrole()
})
Then('I activate Job Role', () => {
    Config.activateJobRole()
})

Then('I search for Job Role', () => {
    Config.searchJobRole()
})
Then('I confirm it return the correct Job Role', () => {
    Config.searchConfirm()

})

When('I click on Branch', () => {
    Config.clickBranchLink()
})

Then('I click on Create Branch', () => {
    Config.clickCreateBranch()
})

Then('I fill the Branch Details', () => {
    Config.enterBranchDetails()
})

Then('I click on create Button', () => {
    Config.clickCreateButton()
    Config.confirmCreation()

})

When('I click on Location',()=>{
    Config.clickLocationlink()
})

Then ('I click on Create Locations Button',()=>{
    Config.clickCreateLocation()
})
Then ("I fill the Location Details",()=>{
    Config.enterLocationDetails()
})

Then('I click on the Create Button to create Location',()=>{
    Config.clickCreateButton()
    Config.confirmCreation()
})

When ('I click on Company',()=>{
    Config.clickCompanyLink()

})
Then ('I click on Create Company Button',()=>{
    Config.clickCreateCompanyBtn()

})
Then ('I fill the Company details',()=>{
    Config.enterCompanyDetails()

})
Then ('I click on Create Button to create a Company',()=>{
    Config.clickCreateButton()
    Config.confirmCreation()
})