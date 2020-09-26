const { response, request } = require("express");
const express = require("express");
var serveStatic = require('serve-static')
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.static(path.join(__dirname, 'static')));

app.post('/', (req, res) => {
  res.send({
    data: [
      { name: 'Shyamkumar', age: 15, class: ['a', 'b', 'c', 'd'] },
      { name: 'Rajkumar', age: 25, class: ['e', 'f', 'g', 'h'] }
    ]
  })
})
app.listen(PORT, () => console.log(`🚀🚀🚀 on http://127.0.0.1:${PORT}`));
