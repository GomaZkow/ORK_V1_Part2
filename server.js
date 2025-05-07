require("dotenv").config();
const express = require("express");
const animalsRouter = require("./src/routes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h2>Апишка для животных!</h2>");
});

app.use("/animals", animalsRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
