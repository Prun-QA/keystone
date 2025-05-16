import { faker } from "@faker-js/faker"
const firstName = faker.person.firstName()
const lastName = faker.person.lastName()
const middleName = faker.person.middleName()
const phoneNumber = `080${faker.string.numeric(8)}`
const email = faker.internet.email()
const address = faker.location.streetAddress()
const city = faker.location.city()
const randomUsername = faker.internet.userName()
const jobtitle = faker.name.jobTitle()
const hmoName = `${faker.company.name()} Health Services Ltd`;
const hmoId = `HMO-${faker.string.alphanumeric({ length: 6 }).toUpperCase()}`;
const fullName = faker.person.fullName();
const randomWord = faker.word.sample()




class workforceManagement {

    workforceBtn = "body > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > aside:nth-child(1) > div:nth-child(2) > div:nth-child(8) > a:nth-child(1) > span:nth-child(2)"
    employeeDataMgtBtn = "//h2[normalize-space()='Employee Data Management']"
    createProfileBtn = "//span[normalize-space()='Create Profile']"
    singleCreate = "//div[normalize-space()='Single Create']"
    firstNamefield = "input[name='firstName']"
    lastNameField = "input[name='lastName']"
    middleNamefield = "input[name='middleName']"
    phoneNumberField = "input[name='phoneNumber']"
    altPhoneNumber = "input[name='altPhoneNumber']"
    emailField = "input[name='emailAddress']"
    address1 = "input[name='residentAddress1']"
    address2 = "input[name='residentAddress2']"
    cityField = "input[name='residentCity']"
    saveContinueBtn = "//span[normalize-space()='Save & Continue']"
    userNameField = "input[name='username']"
    officialEmailField = "input[name='officeEmailAddress']"
    jobTitleField = "input[name='jobTitle']"
    medicalManagementBtn = "//h2[normalize-space()='Medical Management']"
    hmoConfigure = "//h2[normalize-space()='HMO configure and setup']"
    createHmoBtn = "button[type='submit']"
    hmoNameField = "input[name='name']"
    hmoIdField = "input[name='code']"
    contactNameField = "input[name='contactFullName']"
    contactPhoneNumber = "input[name='contactPhoneNumber']"
    contactEmail = "input[name='contactEmail']"
    createBtn = "//span[normalize-space()='Create']"
    doneBtn = "//span[normalize-space()='Done']"
    promotionManager = "//h2[normalize-space()='Promotion Management']"
    requestBtn = "//span[normalize-space()='Request']"
    singleRequest = "//div[contains(@class,'h-8 mb-2 mt-1 flex px-2 items-center hover:bg-misc-lightGrey hover:w-full rounded-sm')]"
    newJobTitle = "input[name='newJobTitle']"
    selectDate = "input[placeholder='DD-MM-YYYY']"
    inputdate = "(//span[contains(text(),'1')])[2]"
    selectBtn = "//span[normalize-space()='Select']"
    remarkField = "#text-control-undefined"
    updateBtn = "//span[normalize-space()='Update']"
   
    







    clickWorkForceBtn() {
        cy.get(this.workforceBtn, { timeout: 15000 }).click()
    }

    clickemployeeDataMgt() {
        cy.xpath(this.employeeDataMgtBtn, { timeout: 15000 }).click()
    }

    createSingleProfile() {
        cy.xpath(this.createProfileBtn).click()
        cy.xpath(this.singleCreate).click()
    }

    //SELECT RANDOM TITLE
    enterBasicInformation() {
        cy.contains('label', 'Title')  // Find the label
            .parent()                                  // Go to the container div
            .find('button[type="button"]')             // Find the interactive button inside
            .click();                                  // Click it
        cy.get('ul.overflow-y-auto > li') // Target all <li> inside the <ul>
            .then(($items) => {
                const itemCount = $items.length; // how many <li> you have
                const randomIndex = Math.floor(Math.random() * itemCount); // pick random index
                cy.wrap($items[randomIndex]).click(); // click the randomly selected <li>
            });

        //ENTER NAMES
        cy.get(this.firstNamefield).type(firstName)
        cy.get(this.lastNameField).type(lastName)
        cy.get(this.middleNamefield).type(middleName)


        //SELECT RANDOM GENDER
        cy.contains('label', 'Gender')  // Find the label
            .parent()                                  // Go to the container div
            .find('button[type="button"]')             // Find the interactive button inside
            .click();                                  // Click it
        cy.get('ul.overflow-y-auto > li') // Target all <li> inside the <ul>
            .then(($items) => {
                const itemCount = $items.length; // how many <li> you have
                const randomIndex = Math.floor(Math.random() * itemCount); // pick random index
                cy.wrap($items[randomIndex]).click(); // click the randomly selected <li>
            });


        //SELECT RANDOM MARITAL STATUS
        cy.contains('label', 'Marital Status')  // Find the label
            .parent()                                  // Go to the container div
            .find('button[type="button"]')             // Find the interactive button inside
            .click();                                  // Click it
        cy.get('ul.overflow-y-auto > li') // Target all <li> inside the <ul>
            .then(($items) => {
                const itemCount = $items.length; // how many <li> you have
                const randomIndex = Math.floor(Math.random() * itemCount); // pick random index
                cy.wrap($items[randomIndex]).click(); // click the randomly selected <li>
            });

        //ENTER PHONE NUMBER
        cy.get(this.phoneNumberField).type(phoneNumber)
        cy.get(this.altPhoneNumber).type(phoneNumber)


        //SELECT COUNTRY (NIGERIA)
        cy.contains('label', 'Country')  // Find the label
            .parent()                                  // Go to the container div
            .find('button[type="button"]')             // Find the interactive button inside
            .click();                                  // Click it
        cy.get('ul.overflow-y-auto > li') // Target all <li> inside the <ul>
        cy.contains('Nigeria').click()

        //GENERATE EMAIL
        cy.get(this.emailField).type(email)


    }

    enterResidentialAddress() {
        //ADD ADDRRESS
        cy.get(this.address1).type(address)
        cy.get(this.address2).type(address)


        //SELECT RANDOM STATE
        cy.contains('label', 'State')  // Find the label
            .parent()                                  // Go to the container div
            .find('button[type="button"]')             // Find the interactive button inside
            .click();                                  // Click it
        cy.get('ul.overflow-y-auto > li') // Target all <li> inside the <ul>
            .then(($items) => {
                const itemCount = $items.length; // how many <li> you have
                const randomIndex = Math.floor(Math.random() * itemCount); // pick random index
                cy.wrap($items[randomIndex]).click(); // click the randomly selected <li>
            });


        //SELECT RANDOM LOCAL GOVERNMENT
        cy.contains('label', 'Local Government')  // Find the label
            .parent()                                  // Go to the container div
            .find('button[type="button"]')             // Find the interactive button inside
            .click();                                  // Click it
        cy.get('ul.overflow-y-auto > li') // Target all <li> inside the <ul>
            .then(($items) => {
                const itemCount = $items.length; // how many <li> you have
                const randomIndex = Math.floor(Math.random() * itemCount); // pick random index
                cy.wrap($items[randomIndex]).click(); // click the randomly selected <li>
            });

        //ENTER CITY
        cy.get(this.cityField).type(city)

        //CLICK SAVE & COUNTINUE
        cy.xpath(this.saveContinueBtn).click()
    }


    workDetails() {
        cy.get(this.userNameField).type(randomUsername)
        cy.get(this.officialEmailField).type(email)
        cy.get(this.jobTitleField).type(jobtitle)

        //SELECT OUTSOURCED COMPANY NAME
        cy.contains('label', 'Outsourced Company Name')  // Find the label
            .parent()                                  // Go to the container div
            .find('button[type="button"]')             // Find the interactive button inside
            .click();                                  // Click it
        cy.get('ul.overflow-y-auto > li') // Target all <li> inside the <ul>
            .then(($items) => {
                const itemCount = $items.length; // how many <li> you have
                const randomIndex = Math.floor(Math.random() * itemCount); // pick random index
                cy.wrap($items[randomIndex]).click(); // click the randomly selected <li>
            });

        //SELECT JOB GRADE
        cy.contains('label', 'Job Grade')  // Find the label
            .parent()                                  // Go to the container div
            .find('button[type="button"]')             // Find the interactive button inside
            .click();                                  // Click it
        cy.get('ul.overflow-y-auto > li') // Target all <li> inside the <ul>
            .then(($items) => {
                const itemCount = $items.length; // how many <li> you have
                const randomIndex = Math.floor(Math.random() * itemCount); // pick random index
                cy.wrap($items[randomIndex]).click(); // click the randomly selected <li>
            });

        //SELECT ORGANISATION LEVEL
        cy.contains('label', 'Organization Level')  // Find the label
            .parent()                                  // Go to the container div
            .find('button[type="button"]')             // Find the interactive button inside
            .click();                                  // Click it
        cy.get('ul.overflow-y-auto > li') // Target all <li> inside the <ul>
            .then(($items) => {
                const itemCount = $items.length; // how many <li> you have
                const randomIndex = Math.floor(Math.random() * itemCount); // pick random index
                cy.wrap($items[randomIndex]).click(); // click the randomly selected <li>
            });

        //SELECT JOB TIER
        cy.contains('label', 'Job Tier')  // Find the label
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


    //MEDICAL MANAGEMENT
    clickMedicalMgt() {
        cy.xpath(this.medicalManagementBtn, { timeout: 15000 }).click()
    }

    clickHmoConfig() {
        cy.xpath(this.hmoConfigure).click()
    }

    createHMO() {
        cy.get(this.createHmoBtn).click()
        cy.get(this.hmoNameField).type(hmoName)
        cy.get(this.hmoIdField).type(hmoId)

        //SELECT RANDOM EMPLOYMENT CATEGORIES
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

        cy.get(this.contactNameField).type(fullName)
        cy.get(this.contactPhoneNumber).type(phoneNumber)
        cy.get(this.contactEmail).type(email)
        cy.xpath(this.createBtn).click()
        cy.xpath("//h1[normalize-space()='HMO Successfully Created']")
            .should('be.visible')
            .and('contain', 'HMO Successfully Created')
        cy.xpath(this.doneBtn).click()
    }

    //Promotion Management
    clickPromotionManager() {
        cy.xpath(this.promotionManager, { timeout: 20000 }).click()
    }

    clickRequestBtn() {
        cy.xpath(this.requestBtn).click()
    }

    clickSingleRequest() {
        cy.xpath(this.singleRequest).click()
    }

    selectEmploymentName() {
        cy.contains('label', 'Employee Name')  // Find the label
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

    selectJobGrade() {
        cy.contains('label', 'New Job Grade')  // Find the label
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

    enterJobTitle() {
        cy.get(this.newJobTitle).type(jobtitle)
    }

    enterDate() {
        cy.get(this.selectDate).click()
        cy.xpath(this.inputdate).click()
        cy.xpath(this.selectBtn).click()
    }

    enterRemark(){
        cy.get(this.remarkField).type(randomWord)
    }

    clickUpdateBtn(){
        cy.xpath(this.updateBtn).click()
        cy.xpath(this.doneBtn).click()
    }


}
export default workforceManagement