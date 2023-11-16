/// <reference types="cypress" />

import { registrationForm } from "../lib/registrationForm";
import { signInForm } from "../lib/signInForm";
import "cypress-wait-until";

// ***********************************************

Cypress.Commands.add("cnhLogin", (username: string, password: string) => {
  cy.visit("/");
  cy.contains("Sign In").click();
  signInForm.usernameInput().type(username);
  signInForm.nextButton().click();
  signInForm.passwordInput().type(password);
  signInForm.signInButton().click();
  cy.get("div[class='userActionsDropdown").contains(username);
});

Cypress.Commands.add("cnhProgramRegister", (registrationUrl: string) => {
  cy.visit(registrationUrl);
  registrationForm.selectProgramButton().click();
  registrationForm.registerButton().click({ force: true });
  registrationForm.nextButton().click();
  registrationForm.selectProgramFeeOption("Drop in Fee");
  registrationForm.proceedToCheckoutButton().click();
  registrationForm.startCheckoutButton().click();
  registrationForm.completeCheckoutButton().click();
  cy.contains("Your order was processed successfully");
});
