// import placeData from "../express/repository/placeData";
const dummyData = require("../express/repository/placeData");
const express = require("express");
const cors = require("cors");
const app = express();

const port = 8080;

// const mapRouter = require("./router/mapRouter");
// const placeRouter = require("./router/placeRouter");

// app.use("/map", mapRouter);
// app.use("/place", placeRouter);
app.use(cors());

const options = {
  origin: "http://localhost:8080",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(options));

app.get("/", cors(), (req, res) => {
  res.send("hello world!!!!!!!");
});

app.post("/", cors(), (req, res) => {
  res.send("babo");
});
app.get("/about/mart", cors(), (req, res) => {
  res.send("about");
  console.log(req.query.res);
});
app.post("/about", cors(), (req, res) => {
  res.send("fdfdf");
});
app.get("/place", cors(), (req, res) => {
  // res.send({ name: "moon" });
  res.send({ dummyData });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
