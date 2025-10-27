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
app.get("/aljune", (req, res) => {
  res.send("Hi! I am Aljune, Junjun in short — I'm 22 years old, currently living in Brgy. 87, Tacloban City. I love to sing, read, dance and play.");
});
app.get("/egonio", (req, res) => {
  res.send("Hi! I am Jillan, Jill in short — I'm 20 years old, currently living in Brgy. 36-A, Imelda Village Tacloban City. My hobby is playing, watching anime and listening to music.");
});
app.get("/floyd", (req, res) => {
  res.send("Hi! I am Floyd, You can call me Dyolf if you're one of my G, I am 20 years old, currently staying in Rawis Anibong Tac. City, I am a gamer, guitarist, beatboxer, and lastly love to draw.");
});
app.get("/duroga", (req, res) => {
  res.send("Hi! I am Joshua R. Duroga, owa in short — I'm 20 years old, currently living in Brgy. 49 Youngfield, Tacloban City. I love myself.");
});
app.get("/cemanes", (req, res) => {
  res.send("Hi! I'm Janille and I like cute things! In the Sanrio Characters, my favorite is KUROMI!!!! I collect them all, so if you have any, please give me some. Thank you!");
});
