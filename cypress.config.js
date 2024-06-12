const { defineConfig } = require("cypress");
const { allureCypress } = require('allure-cypress/reporter')
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // return config;
      allureCypress(on)
    },
    specPattern: "./cypress/tests/**",
    baseUrl: "https://automationexercise.com/"
  },
});

