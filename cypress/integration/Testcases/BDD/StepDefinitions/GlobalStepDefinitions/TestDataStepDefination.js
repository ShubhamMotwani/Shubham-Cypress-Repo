///<reference types="cypress" />
const { When } = require("@badeball/cypress-cucumber-preprocessor");
const { setContextData } = require("../../../../../utils/AutoContext.js");
import { parseVariableValue } from "../../../../../utils/utility.js";
import { faker } from "@faker-js/faker";

//Store Randomly generated "First Name/Last Name/Email/ Street Address" context "contextKey"
When(
  /^Store Randomly generated "([^"]*)" in context "([^"]*)"$/,
  function (datatype, contextKey) {
    if (datatype.toUpperCase() === "FIRST NAME") {
      let randomFirstName = faker.person.firstName();
      cy.log("Generated Random First Name: " + randomFirstName);
      setContextData(contextKey, randomFirstName);
    } else if (datatype.toUpperCase() === "LAST NAME") {
      let randomLastName = faker.person.lastName();
      cy.log("Generated Random Last Name: " + randomLastName);
      setContextData(contextKey, randomLastName);
    } else if (datatype.toUpperCase() === "EMAIL") {
      let randomEmail = faker.internet.email();
      cy.log("Generated Random Email: " + randomEmail);
      setContextData(contextKey, randomEmail);
    } else if (datatype.toUpperCase() === "STREET ADDRESS") {
      let randomStreetAddress = faker.location.streetAddress();
      cy.log("Generated Street Address: " + randomStreetAddress);
      setContextData(contextKey, randomStreetAddress);
    }
  }
);

//Generate Random "Email/Username" Where firstname is "Test Firstname" and Last name is "test lastname" and Store it in context "contextKey"
When(
  /^Generate Random "([^"]*)" Where firstname is "([^"]*)" and Last name is "([^"]*)" and Store it in context "([^"]*)"$/,
  function (datatype, firstName, lastName, contextKey) {
    firstName = parseVariableValue(firstName);
    lastName = parseVariableValue(lastName);
    if (datatype.toUpperCase() === "EMAIL") {
      let randomEmail = faker.internet.email(firstName, lastName);
      cy.log("Generated Random Email: " + randomEmail);
      setContextData(contextKey, randomEmail);
    } else if (datatype.toUpperCase() === "USER NAME") {
      let randomUserName = faker.internet.userName(firstName, lastName);
      cy.log("Generated Random User Name: " + randomUserName);
      setContextData(contextKey, randomUserName);
    }
  }
);
