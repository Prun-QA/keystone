
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://keystone-dev.prunedge.net/signin',
        viewportHeight: 800,
        viewportWidth: 1200,
        pageLoadTimeout: 120000,
        watchForFileChanges: false,
        specPattern: '**/*.feature',
        chromeWebSecurity: false,
        setupNodeEvents,
    }
});
    