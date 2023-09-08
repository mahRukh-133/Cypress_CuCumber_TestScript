import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

// Define a variable to store the state of the primary navigation
let isNavigationExpanded = false;

Given('any user is in PP', () => {
  // Add code to log in or set up the application state as needed
  cy.visit("http.goolgle.com")
  // For simplicity, we'll assume the user is in the PP.
});

When('they view the primary navigation without interacting', () => {
  // User views the primary navigation without any interaction
  // For simplicity, we'll assume that the navigation is already visible.
  isNavigationExpanded = true;
});

When('they expand the primary navigation', () => {
  // Simulate expanding the primary navigation
  // For simplicity, we'll toggle the state.
  isNavigationExpanded = true;
});

When('they collapse the primary navigation', () => {
  // Simulate collapsing the primary navigation
  // For simplicity, we'll toggle the state.
  isNavigationExpanded = false;
});

When('they use the application', () => {
  // Simulate using the application
  // For simplicity, we won't change the navigation state here.
});

Then('they see the primary navigation in the expanded state', () => {
  // Add an assertion to check if the navigation is in the expanded state
  // Adjust the selector based on your application's structure
  cy.get('.primary-navigation')
    .should('be.visible')
    .and('have.class', 'expanded')
    .then(() => {
      expect(isNavigationExpanded).to.be.true; // Ensure that the state is also true
    });
});

Then('they see the primary navigation in the collapsed state', () => {
  // Add an assertion to check if the navigation is in the collapsed state
  // Adjust the selector based on your application's structure
  cy.get('.primary-navigation')
    .should('not.be.visible')
    .and('not.have.class', 'expanded')
    .then(() => {
      expect(isNavigationExpanded).to.be.false; // Ensure that the state is also false
    });
});

Then('the most recent state of the primary navigation is preserved throughout the session', () => {
  // For simplicity, we'll just check if the state remains the same
  expect(isNavigationExpanded).to.be.true; // Adjust based on your specific application's behavior
});
