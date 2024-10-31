Feature: simple form
    Scenario: To Verify the form is working with all the mandatory fields
        Given Navigate to the page using url
        When User enters firstname,lastname,Email,contactnumber 
        And Click on the submit button
        Then User should receive a confirmation message
 