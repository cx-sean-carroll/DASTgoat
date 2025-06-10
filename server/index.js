const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello from the DASTgoat server!");
});

app.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`);
});
