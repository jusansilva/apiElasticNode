const { Router } = require('express');
const route = Router();
const controller = require("../controllers/personController");

route.get("/", controller.get);
route.get("/:id", controller.getById);
route.post("/", controller.post);
route.put("/", controller.put);
route.delete("/", controller.delete);

module.exports = route;