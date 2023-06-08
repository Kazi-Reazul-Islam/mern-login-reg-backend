const express = require("express");
const router = express.Router();

router.get("/all", (req, res) => {
  res.send({
    data: "Data from all routes",
  });
});

module.exports = router;
