const express = require("express");
require("dotenv").config();
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

app.get("/rubin", (req, res) => {
  res.send("Hi! I am Angelica V. Rubin, lyka in short — I'm 20 years old, currently living in Brgy. 95-A, Caiba-an, Tacloban City. I love to draw, read, dance and sing.");
});