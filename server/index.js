// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/simplebackend", (req, res) => {
    res.json({ message: "Hello from Backend server!" });
  });
  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});