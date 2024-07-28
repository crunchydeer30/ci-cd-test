const express = require("express");
const { PORT } = require("./config");
const { databaseConnection } = require("./database");
const expressApp = require("./express-app");
const utils = require("./utils");

const StartServer = async () => {
  const app = express();

  await databaseConnection();

  const channel = await utils.CreateChannel();

  await expressApp(app, channel);

  app
    .listen(PORT, () => {
      console.log(`Shopping service listening to port ${PORT}`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit();
    });
};

StartServer();
