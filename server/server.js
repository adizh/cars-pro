const express = require("express");
const cors = require("cors");

const app = express();

const cars = require("./cars.json");

app.use(cors());
app.use(express.json());
app.get("/cars", (req, res) => {
  res.json(cars);
});
app.get("/cars/:id", (req, res) => {
  const { id } = req.params;

  let find = cars.find((e) => e.id === +id);
  res.json(find);
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
