const { defineConfig } = require('cypress')

module.exports = defineConfig({

  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {
      if (config.env.master) {
        return {
          baseUrl: "",
          env: {
            env: "master"
          },
        };
      } else
        return {
          baseUrl: "http://localhost:1234",
          env: {
            env: "qa"
          },
        };
    },
  },
})