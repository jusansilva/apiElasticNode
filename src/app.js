const Express = require("express");
const bodyParser = require("body-parser");
const { HeathRouters, PersonRouters } = require("./routers");

class App {
  constructor() {
    this.app = Express();
    this.middleare = this.middleare();
    this.router = this.routers();
  }

  middleare(){
    this.app.use(bodyParser.json())
  }

  routers(){
      this.app.use("/", HeathRouters);
      this.app.use("/person/", PersonRouters);
  }
}

module.exports = new App().app;
