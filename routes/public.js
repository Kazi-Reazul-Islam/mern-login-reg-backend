const express = require("express");
const { model } = require("mongoose");
const router = express.Router();

router.get("/all", (req, res) => {
  res.send({
    data: "Data from all routes",
  });
});

module.exports = router;
