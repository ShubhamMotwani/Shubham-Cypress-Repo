///<reference types="cypress" />
import PageHelper from "../../../../../utils/pageHelper";
const { When } = require("@badeball/cypress-cucumber-preprocessor");
const { setContextData } = require("../../../../../utils/AutoContext.js");
const pageHelper = new PageHelper();

// Store Text "Test Text" in context "contextKey"
When(
  /^Store Text "([^"]*)" in context "([^"]*)"$/,
  function (inputName, contextKey) {
    setContextData(contextKey, inputName);
  }
);
