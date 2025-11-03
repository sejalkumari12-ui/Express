import express from 'express';

const app = express();

app.use(function(req, res, next) {
  console.log("middleware working");
  next();
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
