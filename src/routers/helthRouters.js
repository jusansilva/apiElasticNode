const { Router } = require('express');
const route = Router();

route.get("/", (req, res, next) => {
    res.json({"message": "app alive!"})
});

module.exports = route;