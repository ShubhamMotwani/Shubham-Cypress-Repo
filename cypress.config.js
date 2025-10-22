const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const { exec } = require("child_process");

async function setupNodeEvents(on, config) {
  // Existing Cucumber preprocessor setup
  await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", preprocessor(config));

  // Run post-test scripts after Cypress finishes
  on("after:run", (results) => {
    console.log("Cypress tests finished. Running post-test scripts...");
    exec(
      "node scripts/generateReport.js && node scripts/sendEmail.js",
      (err, stdout, stderr) => {
        if (err) {
          console.error("Error running post-test scripts:", err);
          return;
        }
        console.log(stdout);
        if (stderr) console.error(stderr);
      }
    );
  });

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
    reporter: "mocha-junit-reporter",
    reporterOptions: {
      mochaFile: "results/junit/test-results-[hash].xml",
      toConsole: true,
      overwrite: true,
    },
    setupNodeEvents,
    specPattern: "cypress/integration/Testcases/BDD/Features/*/*.feature",
  },
});
