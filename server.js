const express = require("express");
const app = express();
const port = 8000;
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
dotenv.config();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.set("view engine", "ejs");
app.use(express.static("public"));

// Router
const teknisi = require("./router/teknisi")
app.use('/teknisi', teknisi)

app.get("/", (req, res) => {
    res.render('teknisi/app-teknisi.ejs')
});


app.listen(port, () => {
  console.log(`Server Sedang Berjalan di http://localhost:${port}`);
});