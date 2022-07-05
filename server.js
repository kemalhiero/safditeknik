const express = require("express");
const app = express();
const port = 8000;
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { isAdmin, isTeknisi , checkUser } = require("./middleware/authToken")
dotenv.config();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("*", checkUser)
// Router
const admin = require("./router/admin")
app.use('/admin', admin)

const auth = require("./router/auth")
app.use('/auth', auth)

const teknisi = require("./router/teknisi")
app.use('/teknisi', teknisi)

app.get("/", (req, res) => {

  res.redirect('/auth/login')

});

//----------------------------------
app.use("/", (req, res) => {
  res.send("eror 404 ges, halamannnya ngga ketemu");
});

app.listen(port, () => {
  console.log(`Server Sedang Berjalan di http://localhost:${port}`);
});