Feature: WORKFORCE MANAGEMENT

    Background: LOGIN SUCCESSFUL
        Given I navigate to the Login Page
        When I enter my username
        Then I enter my password
        Then I enter my Token ID
        Then I click on the Sign in button
        Then I should be sign in successfully
        When I click on Workforce Management

    
    Scenario: Employee Data Management
        Then I click on Employee Data Management
        Then I create a single Profile
        Then I enter my work details
    
    Scenario: Medical Management
        When I click on Medical Management
        Then I click on HMO configuration and setup
        Then I create HMO
    
    
    Scenario: Promotion Manager
        When I click on Promotion Manager
        Then I click on Request Button
        Then I click on Single Request
        Then I fill the Update Employee Job Grade form
        Then I click on Update to save the Promotion

