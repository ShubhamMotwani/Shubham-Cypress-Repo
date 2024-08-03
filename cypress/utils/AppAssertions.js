///<reference types="cypress" />
class AppAssertions {
  validateElementVisibility(element, status) {
    if (status.toUpperCase() == "DISPLAYED") {
      element.should("be.visible");
    } else if (status.toUpperCase() == "NOT DISPLAYED") {
      element.should("not.be.visible");
    }
  }

  validateElementEnability(element, status) {
    if (
      status.toUpperCase() == "DISABLED" ||
      status.toUpperCase() == "NOT ENABLED"
    ) {
      element.should("be.disabled");
    } else if (status.toUpperCase() == "ENABLED") {
      element.should("not.be.disabled");
    }
  }

  validateElementVisibleWithText(element, expectedText) {
    element
      .should("be.visible")
      .invoke("text")
      .then((actualText) => {
        expect(actualText.trim()).to.equal(expectedText.trim());
      });
  }

  validateElementCSS(element, propertyName, propertyValue) {
    element.should("have.css", propertyName, propertyValue);
  }
}

export default AppAssertions;
