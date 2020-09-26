const { response, request } = require("express");
const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("<h1>Hello ji</h1>");
});

app.listen(8000, () => console.log("Working on http://127.0.0.1:8000"));
