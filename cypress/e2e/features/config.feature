Feature: KEYSTONE BANK

    Background: CONFIGURATION MODULE
        Given I navigate to the Login Page
        When I enter my username
        Then I enter my password
        Then I enter my Token ID
        Then I click on the Sign in button
        Then I should be sign in successfully
        When I click on Configuration

    Scenario: Create Job Grades
        Then I click on Job Grades
        Then I click on Create Job Grade button
        Then I fill the Job Grade Details
        Then I click on Create
        Then I should see the success modal and Click Done

    Scenario: Disable and Activate a Job Grade
        Then I click on Job Grades
        Then I disable a Job Grade
        Then I activate a Job Grade

    Scenario: Search for Job Grade
        Then I click on Job Grades
        When I search for a Job Grade
        Then I confirm it return the correct Job Grade

    Scenario: Create Job Role
        When I click on Job Role
        Then I click on Create Job Role button
        Then I fill the Job Role details
        Then I click on create
        Then I should see the success modal and click Done

    
    Scenario: Edit Job Role
        When I click on Job Role
        Then I edit the Job Role


    Scenario: Disable and Activate a Job Role
        When I click on Job Role
        Then I disable a Job Role
        # Then I activate Job Role
    
        

    Scenario: Search for Job Role
        When I click on Job Role
        Then I search for Job Role
        Then I confirm it return the correct Job Role

 
    Scenario: Create Branch
        When I click on Branch
        Then I click on Create Branch
        Then I fill the Branch Details
        Then I click on create Button


    Scenario: Create Location
        When I click on Location
        Then I click on Create Locations Button
        Then I fill the Location Details
        Then I click on the Create Button to create Location


    Scenario: Create Company
        When I click on Company
        Then I click on Create Company Button
        Then I fill the Company details
        Then I click on Create Button to create a Company