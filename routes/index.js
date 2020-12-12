const express = require("express");
const controllers = require("../controllers");

const router = new express.Router();
module.exports = () => {
  router.get("/", controllers.view);
  return router;
};
