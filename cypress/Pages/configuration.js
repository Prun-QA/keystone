import { faker } from "@faker-js/faker"
const randomJobTitle = faker.name.jobTitle()
const randomJobGrade = faker.string.alphanumeric(6).toUpperCase()
const randomJobRoleName = faker.name.jobType()
const randomJobRoleCode = faker.string.alpha({ length: 3, casing: 'upper' })
const jobDescription = faker.lorem.word()
const bankBranch = faker.location.state()
const branchCode = faker.location.state({ abbreviated: true })
const Address = faker.location.streetAddress()
const location = faker.location.state()
const locationCode = faker.location.state({abbreviated: true})
const city = faker.location.city()
const companyName = faker.company.name()
const companyCode = faker.string.alphanumeric({length: 5}).toUpperCase()


class configuration {
    configurationButton = "body > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > aside:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > span:nth-child(2)"
    jobGradeslink = "//a[text()='Job Grades']"
    createJobButton = "body > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > main:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)"
    jobGradeButton = "//button[contains(text(),'Create Job Grade')]"
    jobGradeTitle = "input[name='jobGrade']"
    jobGradeID = "input[name='jobGradeID']"
    employmentCatergory = ".h-4.w-4.transform"
    createButton = "//span[normalize-space()='Create']"
    successMessage = "//h1[normalize-space()='Success']"
    doneButton = "//span[normalize-space()='Done']"
    activeButton = "tbody tr:nth-child(1) td:nth-child(5)"
    disableButton = "//button[normalize-space()='Disable']"
    activateButton = "//button[normalize-space()='Activate']"
    confirmDisable = "//span[normalize-space()='Disable']"
    confirmActivate = "//span[normalize-space()='Activate']"
    disableSuccessModal = "//h1[normalize-space()='Success']"
    activateSuccessModal = "//h1[normalize-space()='Success']"
    disableDoneButton = "//span[normalize-space()='Done']"
    activateDoneButton = "//span[normalize-space()='Done']"
    searchBox = "input[placeholder='Search...']"
    searchJobGrade = "Product Manager "
    confirmSearch = "tbody"
    jobRoleLink = "//a[normalize-space()='Job Role']"
    createJobRoleButton = "//span[normalize-space()='Create Job Role']"
    createJobRole = "//button[contains(text(),'Create Job Role')]"
    jobRoleName = "input[name='name']"
    jobRoleCode = "input[name='code']"
    descriptionfield = "#text-control-undefined"
    meatBallMenu = "tbody tr:nth-child(1) td:nth-child(6) button:nth-child(1)"
    disableOption = "//button[normalize-space()='Disable']"
    editJob = "//button[normalize-space()='Edit']"
    updateButton = "//span[normalize-space()='Update']"
    branchLink = "//a[normalize-space()='Branch']"
    createBranch = "//span[normalize-space()='Create Branch']"
    branchNameField = "input[name='branchName']"
    branchCodeField = "input[name='branchCode']"
    branchAddressField = "input[name='branchAddress']"
    locationLink = "//a[normalize-space()='Location']"
    createLocationBtn = "//span[normalize-space()='Create Locations']"
    locationNameField = "input[name='locationName']"
    locationCode = "input[name='locationCode']"
    locationCity = "input[name='city']"
    locationAddress = "input[name='address']"
    companyLink = "//a[normalize-space()='Company']"
    createCompanyBtn = "//span[normalize-space()='Create Company']"
    companyNameField = "input[name='companyName']"
    companyIDfield = "input[name='companyId']"











    clickConfig() {
        cy.get(this.configurationButton).click()
    }

    //JOB GRADE ELEMENT

    clickJobgrade() {
        cy.xpath(this.jobGradeslink, { timeout: 10000 }).click();
    }
    clickCreateJob() {
        cy.get(this.createJobButton).click()
        cy.xpath(this.jobGradeButton).click()
    }
    enterJobTitle() {
        cy.get(this.jobGradeTitle).type(randomJobTitle)
    }
    enterJobGradeID() {
        cy.get(this.jobGradeID).type(randomJobGrade)
    }
    selectEmploymentCategory() {
        cy.get(this.employmentCatergory).click({ force: true })
        // Make sure any loading/overlay is gone first if necessary
        cy.get('ul.overflow-y-auto > li') // Target all <li> inside the <ul>
            .then(($items) => {
                const itemCount = $items.length; // how many <li> you have
                const randomIndex = Math.floor(Math.random() * itemCount); // pick random index
                cy.wrap($items[randomIndex]).click(); // click the randomly selected <li>
            });
    }

    clickCreateButton() {
        cy.xpath(this.createButton).click({ force: true })
    }

    confirmCreation() {
        cy.xpath(this.doneButton).click()
    }

    clickToDisable() {
        cy.get(this.activeButton).click()
        cy.xpath(this.disableButton).click()
        cy.xpath(this.confirmDisable).click()
        cy.xpath(this.disableSuccessModal).should('be.visible').and('exist')
        cy.xpath(this.disableDoneButton).click()
    }

    clickToActivate() {
        cy.get(this.activeButton).click()
        cy.xpath(this.activateButton).click()
        cy.xpath(this.confirmActivate).click()
        cy.xpath(this.activateSuccessModal).click()
        cy.xpath(this.activateDoneButton).click()

    }

    clickSearchBox() {
        cy.get(this.searchBox).click()
            .type(this.searchJobGrade)
    }

    searchConfirm() {
        cy.get(this.confirmSearch).should('contain', "Product")
    }



    //JOB ROLE ELEMENTS

    clickJobRole() {
        cy.xpath(this.jobRoleLink).click()
    }

    clickCreateJobRole() {
        cy.xpath(this.createJobRoleButton).click()
        cy.xpath(this.createJobRole).click()
    }

    enterJobRoleName() {
        cy.get(this.jobRoleName).type(randomJobRoleName)
    }
    enterJobRoleCode() {
        cy.get(this.jobRoleCode).type(randomJobRoleCode)
    }
    selectOrganisationLevel() {
        cy.contains('label', 'Organisation Level')  // Find the label
            .parent()                                  // Go to the container div
            .find('button[type="button"]')             // Find the interactive button inside
            .click();                                  // Click it
        cy.get('ul.overflow-y-auto > li') // Target all <li> inside the <ul>
            .then(($items) => {
                const itemCount = $items.length; // how many <li> you have
                const randomIndex = Math.floor(Math.random() * itemCount); // pick random index
                cy.wrap($items[randomIndex]).click(); // click the randomly selected <li>
            });
    }
    selectReportto() {
        cy.contains('label', 'Reporting T')  // Find the label
            .parent()                                  // Go to the container div
            .find('button[type="button"]')             // Find the interactive button inside
            .click();                                  // Click it
        cy.get('ul.overflow-y-auto > li') // Target all <li> inside the <ul>
            .then(($items) => {
                const itemCount = $items.length; // how many <li> you have
                const randomIndex = Math.floor(Math.random() * itemCount); // pick random index
                cy.wrap($items[randomIndex]).click(); // click the randomly selected <li>
            });
    }
    enterDescription() {
        cy.get(this.descriptionfield).type(jobDescription)
    }

    editJobRole() {
        cy.get(this.meatBallMenu).click()
        cy.xpath(this.editJob).click()
        cy.get(this.descriptionfield).clear()
            .type(jobDescription)
        cy.xpath(this.updateButton).click()

    }

    disableJobrole() {
        cy.get(this.meatBallMenu).click()
        cy.xpath(this.disableButton).click()
        cy.xpath(this.confirmDisable).click()
        cy.xpath(this.disableSuccessModal).should('be.visible').and('exist')
        cy.xpath(this.disableDoneButton).click()
        // cy.xpath(this.disableOption).click()
        // cy.xpath(this.confirmDisable).click()
    }
    activateJobRole() {
        cy.get(this.meatBallMenu).click()
        cy.xpath(this.activateButton).click()
        cy.xpath(this.confirmActivate).click()
        cy.xpath(this.activateSuccessModal).click()
        cy.xpath(this.activateDoneButton).click()
    }

    searchJobRole() {
        cy.get(this.searchBox).click()
            .type('Product')
    }


    //BRANCH ELEMENT

    clickBranchLink() {
        cy.xpath(this.branchLink).click()
    }
    clickCreateBranch() {
        cy.xpath(this.createBranch).click()
    }
    enterBranchDetails() {
        cy.get(this.branchNameField, { timeout: 30000 }).type(bankBranch)
        cy.get(this.branchCodeField).type(branchCode)
        cy.get(this.branchAddressField).type(Address)
        cy.contains('label', 'Location Code')  // Find the label
            .parent()                                  // Go to the container div
            .find('button[type="button"]')             // Find the interactive button inside
            .click();                                  // Click it
        cy.get('ul.overflow-y-auto > li') // Target all <li> inside the <ul>
            .then(($items) => {
                const itemCount = $items.length; // how many <li> you have
                const randomIndex = Math.floor(Math.random() * itemCount); // pick random index
                cy.wrap($items[randomIndex]).click(); // click the randomly selected <li>
            });
    }


    //LOCATION ELEMENT

    clickLocationlink() {
        cy.xpath(this.locationLink).click()
    }

    clickCreateLocation() {
        cy.xpath(this.createLocationBtn).click()
    }

    enterLocationDetails() {
        cy.get(this.locationNameField).type(location)
        cy.get(this.locationCode).type(locationCode)

        //Get State Dropdown
        // Click the specific dropdown button (using a precise selector)
        cy.get('button[id^="headlessui-popover-button"]')  // Adjust this if needed
            .first() // Ensures only one element is selected
            .click();
        cy.get('ul.overflow-y-auto > li') // Target all <li> inside the <ul>
            .then(($items) => {
                const itemCount = $items.length; // how many <li> you have
                const randomIndex = Math.floor(Math.random() * itemCount); // pick random index
                cy.wrap($items[randomIndex]).click(); // click the randomly selected <li>
            });
        
        //GET LGA DROPDOWN
        cy.contains('label', 'LGA')  // Find the label
            .parent()                                  // Go to the container div
            .find('button[type="button"]')             // Find the interactive button inside
            .click();                                  // Click it
        cy.get('ul.overflow-y-auto > li') // Target all <li> inside the <ul>
            .then(($items) => {
                const itemCount = $items.length; // how many <li> you have
                const randomIndex = Math.floor(Math.random() * itemCount); // pick random index
                cy.wrap($items[randomIndex]).click(); // click the randomly selected <li>
            });
        
        cy.get(this.locationCity).type(city)
        cy.get(this.locationAddress).type(Address)


    }


    //CREATE A COMPANY
    clickCompanyLink(){
        cy.xpath(this.companyLink).click()
    }

    clickCreateCompanyBtn(){
        cy.xpath(this.createCompanyBtn).click()
    }

    enterCompanyDetails(){
        cy.get(this.companyNameField).type(companyName)
        cy.get(this.companyIDfield).type(companyCode)

        cy.contains('label', 'Employment Category')  // Find the label
        .parent()                                  // Go to the container div
        .find('button[type="button"]')             // Find the interactive button inside
        .click();                                  // Click it
    cy.get('ul.overflow-y-auto > li') // Target all <li> inside the <ul>
        .then(($items) => {
            const itemCount = $items.length; // how many <li> you have
            const randomIndex = Math.floor(Math.random() * itemCount); // pick random index
            cy.wrap($items[randomIndex]).click(); // click the randomly selected <li>
        });

    }


}
export default configuration