const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (request, response) => {
  response.sendFile(path.join(__dirname, "public", "about.html"));
});
app.use((request, response) => {
  response.sendFile(path.join(__dirname, "public", "notFount.html"));
});
app.listen(PORT, () => {
  console.log(`server listening at port : ${PORT}`);
});
