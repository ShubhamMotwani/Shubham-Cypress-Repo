import { getContextData } from "./AutoContext";
let env = Cypress.env("ENV");
export function getBaseUrl() {
  if (env == "BaseURL") {
    return "https://magento.softwaretestingboard.com";
  }
}

export function parseVariableValue(value, dataMap) {
  if (value.startsWith("context_")) {
    return getContextData(value);
  } else {
    return value;
  }
}
