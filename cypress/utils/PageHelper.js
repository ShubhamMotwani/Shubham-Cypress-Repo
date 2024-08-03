class PageHelper {
  getPageMap(dataMap, page) {
    let map;
    switch (page) {
      case "Home Page":
        map = dataMap.get("homePage");
        break;

      case "User Registration Page":
        map = dataMap.get("userRegistrationPage");
        break;

      case "Profile Page":
        map = dataMap.get("profilePage");
        break;

      default:
        assert.fail("Incorrect Page Name, Please check the Page name.");
    }
    return map;
  }

  getElement(cssSelector) {
    return cy.get(cssSelector);
  }
}

export default PageHelper;
