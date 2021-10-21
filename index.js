const express = require("express");
const { ExpressHandlebars } = require("express-handlebars");
const app = express();
const exprehbs = require("Express-handlebars");
const expressFileUpload = require("express-fileupload");
const jwt = require("jsonwebtoken");
const secretKey = "Shhhh";
const path = require("path");
const exphbs = require("express-handlebars");

app.listen(3000, () => {
  console.log("Servidor ON port 3000");
});

//Midlewares
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  expressFileUpload({
    limits: 5000000,
    abortOnLimit: true,
    responseOnLimit: "El tamaño de la imagen supera el limite permitido",
  })
);

app.use('css', path.join(__dirname, '/node_modules/bootstrap/dist/css'));
app.engine('handlebars',
exphbs({
    defaultLayout: 'main',
    layoutsDir: `${__dirname}/views/mainLayout`,
})
);

app.set('view engine', 'handlebars');
