const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.send("Welcome to your express API");
});

app.listen(5000, () => console.log("App running on port 5000 🔥"));
