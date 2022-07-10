const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ztbf7q',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: false,
    timestamp: "mmddyyyy_HHMMss"
  },
  e2e: {
    baseUrl: "https://alura-fotos.herokuapp.com/#/home/signup",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
