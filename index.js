const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();
const { readdirSync } = require("fs");

//App
const app = express();

//Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

//MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connection Success"))
  .catch(() => console.log("Something Went Wrong"));

//Routes
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

//Port
const port = process.env.PORT || 8000;

app.listen(port, (req, res) => {
  console.log(`Server running at port ${port}`);
});
