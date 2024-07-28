import express from "express";

const app = express();

app.use(express.json());

app.use("/", (req, res) => {
  res.status(200).json({ message: "Welcome to shopping service" });
});

app.listen(8003, () => {
  console.log("Shopping service active at http://localhost:8003");
});
