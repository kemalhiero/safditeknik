const model = require('../models/indexmodel');
const { Op, QueryTypes  } = require("sequelize");
const sequelize = model.dbconfig;
const controller = {};

controller.tampilDashboardAdmin = async function(req, res){
    res.render("admin/dashboard", {});
}

controller.tampilDaftarPelanggan = async function(req, res){
    res.render("admin/pelanggan", {});
}

controller.tampiltambahBarang = async function(req, res){
    res.render("admin/tambah", {});
}


module.exports = controller;