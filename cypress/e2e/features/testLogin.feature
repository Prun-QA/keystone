
Feature: KEYSTONE BANK

    Background:
        Given I navigate to the Login Page

    Scenario: Invalid Login
        When I enter invalid username
        Then I enter my password
        Then I enter my Token ID
        Then I click on the Sign in button
        Then I should see an error message

    Scenario: Valid Login
        When I enter my username
        Then I enter my password
        Then I enter my Token ID
        Then I click on the Sign in button
        Then I should be sign in successfully


