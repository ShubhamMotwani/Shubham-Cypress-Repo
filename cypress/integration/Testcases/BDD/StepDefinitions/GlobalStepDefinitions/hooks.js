///<reference types="cypress" />;

let data;
var testDataMap = new Map();
var pageDataMap = new Map();

before("This block executed before all the tests", function () {
  cy.fixture("PageFactory/HomePage").then(function (pageElements) {
    data = pageElements;
    pageDataMap.set(
      "homePage",
      new Map(Object.entries(JSON.parse(JSON.stringify(data))))
    );
  });

  cy.fixture("PageFactory/UserRegistrationPage").then(function (pageElements) {
    data = pageElements;
    pageDataMap.set(
      "userRegistrationPage",
      new Map(Object.entries(JSON.parse(JSON.stringify(data))))
    );
  });

  cy.fixture("PageFactory/ProfilePage").then(function (pageElements) {
    data = pageElements;
    pageDataMap.set(
      "profilePage",
      new Map(Object.entries(JSON.parse(JSON.stringify(data))))
    );
  });
});

//Export pageDataMap for use in other files
module.exports = { pageDataMap };
