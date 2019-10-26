"use strict";
let express = require("express");
let bodyParser = require("body-parser");
const hbs = require("express-handlebars");

let app = express();

//cargar rutas
let projectRoutes = require("./routes/project");

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine(
    ".hbs",
    hbs({
        defaultLayout: "default",
        extname: ".hbs"
    })
);

app.set("view engine", ".hbs");

//CORS

//rutas
app.use("/api", projectRoutes);
app.get("/login", (req, res) => {
    res.render("login");
});
module.exports = app;