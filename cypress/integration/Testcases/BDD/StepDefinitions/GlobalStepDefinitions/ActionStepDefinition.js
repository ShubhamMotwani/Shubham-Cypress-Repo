///<reference types="cypress" />
import PageHelper from "../../../../../utils/pageHelper.js";
import { parseVariableValue } from "../../../../../utils/utility";
const { When } = require("@badeball/cypress-cucumber-preprocessor");
const pageHelper = new PageHelper();
let map;

//Importing and renaming the variables from hook.js
const { testDataMap, pageDataMap } = require("./hooks");

// Select element "Test Element" on "Test Page"
When(/^Select element "([^"]*)" on "([^"]*)"$/, function (uiElement, page) {
  map = pageHelper.getPageMap(pageDataMap, page);
  pageHelper.getElement(map.get(uiElement)).click();
});

// Enter text "Test text" in "Test Textbox" on "Test Page"
When(
  /^Enter text "([^"]*)" in "([^"]*)" on "([^"]*)"$/,
  function (textString, uiElement, page) {
    textString = parseVariableValue(textString, testDataMap);
    map = pageHelper.getPageMap(pageDataMap, page);
    pageHelper
      .getElement(map.get(uiElement))
      .clear({ force: true })
      .type(textString);
  }
);

//Scroll to view "Test Element" on "Test Page"
When(/^Scroll to view "([^"]*)" on "([^"]*)"$/, function (uiElement, page) {
  map = pageHelper.getPageMap(pageDataMap, page);
  pageHelper.getElement(map.get(uiElement)).scrollIntoView();
});

// Clear text from "Test Textbox" on "Test Page"
When(/^Clear Text from "([^"]*)" on "([^"]*)"$/, function (uiElement, page) {
  map = pageHelper.getPageMap(pageDataMap, page);
  pageHelper.getElement(map.get(uiElement)).clear({ force: true });
});
