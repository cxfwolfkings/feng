const chromedriver = require("chromedriver");
module.exports = {
  src_folders: ["test/e2e/specs"],
  output_folder: "test/e2e/reports",
  webdriver: {
    start_process: true,
    server_path: chromedriver.path,
    port: 9515
  },
  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: "chrome"
      }
    }
  }
};