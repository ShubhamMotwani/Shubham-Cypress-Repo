import { Before } from "@badeball/cypress-cucumber-preprocessor";
import { getBaseUrl } from "../../../../../utils/utility.js";

let URL = getBaseUrl();
Before({ tags: "@LaunchApplication", order: 1 }, () => {
  cy.visit(URL);
});
