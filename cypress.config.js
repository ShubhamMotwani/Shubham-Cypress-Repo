const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", preprocessor(config));
  return config;
}
module.exports = defineConfig({
  env: {
    BaseURL: "https://magento.softwaretestingboard.com",
    ENV: "BaseURL",
  },
  pageLoadTimeout: 300000,
  defaultCommandTimeout: 60000,
  chromeWebSecurity: false,
  chromeArgs: [
    "--disable-site-isolation-trials",
    "--disable-features=CrossSiteDocumentBlockingIfIsolating",
  ],
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/integration/Testcases/BDD/Features/*/*.feature",
  },
});
