import {Given,When,And,Then} from "cypress-cucumber-preprocessor/steps";

Given('Navigate to the page using url',()=>{
    cy.visit('https://v1.training-support.net/selenium/simple-form');
});
When('User enters firstname,lastname,Email,contactnumber',()=>{
    cy.get('#firstName').type('Jagadish');
    cy.get('#lastName').type('Moharana');
    cy.get('#email').type('jagadish@gmail.com');
    cy.get('#number').type('9087654321');
});
And('Click on the submit button',()=>{
    cy.get('[value="submit"]').click();
});
Then('User should receive a confirmation message',()=>{
    cy.on('window:alert',(alert)=>{
        expect(alert).to.contains('Thank You for reaching out to us, Jagadish Moharana');
    })
})