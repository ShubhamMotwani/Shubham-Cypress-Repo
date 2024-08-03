import PageHelper from "../../../../../utils/PageHelper";
import AppAssertions from "../../../../../utils/AppAssertions";
import { parseVariableValue } from "../../../../../utils/utility";

const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

const pageHelper = new PageHelper();
const appAssertions = new AppAssertions();

let map;
let gridmap;

//Importing and renaming the variables from hook.js
const { testDataMap, pageDataMap } = require("./hooks");
const {
  setContextData,
  getContextData,
} = require("../../../../../utils/AutoContext.js");

// Verify that "Test Element" contains text "Test text" on "Test Page"
Then(
  /^Verify that "([^"]*)" contains text "([^"]*)" on "([^"]*)"$/,
  function (uiElement, textString, page) {
    textString = parseVariableValue(textString, testDataMap);
    map = pageHelper.getPageMap(pageDataMap, page);
    // pageHelper.getElement(map.get(uiElement)).should('contain.text', textString)
    pageHelper.getElement(map.get(uiElement)).then(($element) => {
      const elementText = $element
        .text()
        .replace(/\n/g, "")
        .trim()
        .replace(/\s+/g, " ");
      cy.wrap(elementText).should("contain", textString);
    });
  }
);

// Verify visibility that "Test Element" is "displayed / not displayed" on "Test Page"
Then(
  /^Verify visibility that "([^"]*)" is "([^"]*)" on "([^"]*)"$/,
  function (uiElement, status, page) {
    map = pageHelper.getPageMap(pageDataMap, page);
    appAssertions.validateElementVisibility(
      pageHelper.getElement(map.get(uiElement)),
      status
    );
  }
);

// Verify enability that "Test Element" is "enabled / disabled / not enabled" on "Test Page"
Then(
  /^Verify enability that "([^"]*)" is "([^"]*)" on "([^"]*)"$/,
  function (uiElement, status, page) {
    map = pageHelper.getPageMap(pageDataMap, page);
    appAssertions.validateElementEnability(
      pageHelper.getElement(map.get(uiElement)),
      status
    );
  }
);

// Verify that URL contains "Test String"
Then(/^Verify that URL contains "([^"]*)"$/, function (value) {
  value = parseVariableValue(value, testDataMap);
  cy.url().should("include", value);
});

//Verify that element "Test Element" with text "Test Text" is visible on "Test Page"
Then(
  /^Verify that element "([^"]*)" with text "([^"]*)" is visible on "([^"]*)"$/,
  function (uiElement, text, page) {
    text = parseVariableValue(text, testDataMap);
    map = pageHelper.getPageMap(pageDataMap, page);
    appAssertions.validateElementVisibleWithText(
      pageHelper.getElement(map.get(uiElement)),
      text
    );
  }
);

//Verify CSS that "Test Element" to have CSS Property "Test Property" with value as "Test value" on "Test Page"
Then(
  /^Verify CSS that "([^"]*)" to have CSS Property "([^"]*)" with value as "([^"]*)" on "([^"]*)"$/,
  function (uiElement, propertyName, propertyValue, page) {
    map = pageHelper.getPageMap(pageDataMap, page);
    appAssertions.validateElementCSS(
      pageHelper.getElement(map.get(uiElement)),
      propertyName,
      propertyValue
    );
  }
);
