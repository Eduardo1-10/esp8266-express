const functions = require("firebase-functions");

const express = require("express"),
  http = require("http");

const app = express();
app.set("port", process.env.PORT || 9000);

app.use(express.json({ limit: "1000mb" }));

app.get("/", function (req, res) {
  res.json({ message: "ok" });
});

app.post("/postplain", function (req, res) {
  console.log(req);
  res.status(200).send({ message: "received" });
});

module.exports.app = functions.https.onRequest(app);
