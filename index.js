//dependencies
const express = require("express");
const rout = require("./routes");
const path = require("path");
// application
const app = express();
//static archives

app.use(express.static("public"));

//habilitar
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./view"));
//const
const port = 8080;
const domain = "localhost";
// listen
app.listen(8080, () => console.log(`running server http://${domain}:${port}`));
//handler
app.use("/", rout());
