const model = require("../models/users");
const controller = {};
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

function generateAccessToken(email) {
  return jwt.sign(email, process.env.TOKEN, { expiresIn: "1d" });
}

controller.tampillogin = async function (req, res) {
    const token = req.cookies.token;
    if (token) return res.redirect('/');
    
    res.render("auth/login");
  }

controller.tampilregister = async function (req, res) {
    res.render("auth/register");
}

controller.login = async function (req, res) {
  //Cek email
  const user = await model.findOne({ where: { email: req.body.email } });
  if (!user) return res.status(400).send("Email tidak ditemukan");

  //Cek Password
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Password Salah");

  const nama = user.name;
  const email = user.email;
  const role = user.role;

  const token = generateAccessToken({ 
    email,nama,role
   });

  await model.update(
    { remember_token: token },
    {
      where: { email: req.body.email },
    }
  );

  res
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    })
    // .json({token})
    .redirect("/");

};

controller.register = async function (req, res) {
  const { name, email, password, confPassword, role } = req.body;
  if (password !== confPassword) return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  const emailExist = await model.findOne({ where: { email: req.body.email } });
  if (emailExist) return res.status(400).send("Email sudah dipakai");

  try {
    await model.create({
      name,
      email,
      password: hashPassword,
      role,
    });
    res.redirect("/auth/login");
  } catch (error) {
    console.log(error);
  }

  //redirect ke halaman login
};

module.exports = controller;