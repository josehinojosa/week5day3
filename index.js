const express = require("express");
const bodyParser = require("body-parser");
const mustacheExpress = require('mustache-express');

const app = express();


app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache')
app.set('views', './views')
app.use(express.static("./"));
app.use(bodyParser.urlencoded({extended: true}));

  app.get("/", function (req, res) {
  res.render('index', { todo: todo })
  });
  const todo = [
  "Wash the car"
];

app.post("/todo", function (req, res) {
  todo.push(req.body.todo);
  res.redirect('/');
});

app.listen(3000, () => console.log("ready!"));
