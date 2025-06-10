const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from the DASTgoat client!");
});

app.listen(port, () => {
  console.log(`Client app listening at http://localhost:${port}`);
});
