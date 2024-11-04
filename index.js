const express = require("express");
const mongoose = require("mongoose");

const PORT = 3000;
const DB = "mongodb://127.0.0.1:27017";

const app = express();

    mongoose.connect(DB, {}, (err, res) => {
    if (!err) {
        console.log("Base de datos conectada!");
    } else {
        console.log('Error al conectarse a la base de datos: ' + err);
    }
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})