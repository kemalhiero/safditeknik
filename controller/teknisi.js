const model = require('../models/indexmodel');
const { Op, QueryTypes  } = require("sequelize");
const sequelize = model.dbconfig;
const controller = {};

controller.tampilDashboardTeknisi = async function(req, res){
    res.render("teknisi/dashboard", {dasbord: "", perbaikan: "collapsed"});
}

controller.tampilPerbaikan = async function(req, res){
    res.render("teknisi/perbaikan", {dasbord: "collapsed", perbaikan: ""});
}


module.exports = controller;