import PageHelper from "../../../../../utils/PageHelper";
import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { parseVariableValue } from "../../../../../utils/utility.js";
import { pageDataMap } from "../GlobalStepDefinitions/hooks";

let map;
const pageHelper = new PageHelper();

//Verify Greet Message for First Name "test first name" and Last Name "test last name"
Then(
  /^Verify Greet Message for First Name "([^"]*)" and Last Name "([^"]*)"$/,
  function (firstName, lastName) {
    firstName = parseVariableValue(firstName);
    lastName = parseVariableValue(lastName);
    map = pageHelper.getPageMap(pageDataMap, "Profile Page");
    let greetMessage = `Welcome, ${firstName} ${lastName}!`;
    pageHelper
      .getElement(map.get("Welcome Message"))
      .should("have.text", greetMessage);
  }
);
