const express = require("express");
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
dotenv.config();

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./routes/customer.routes.js")(app);


// set port, listen for requests
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});