var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

//const db = require('../bin/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard/home'); 
});

router.get('/table', function(req, res, next) {
  res.render('dashboard/table'); 
});

router.get('/chart', function(req, res, next) {
  res.render('dashboard/chart'); 
});


// router.post('/home',(req,res,next)=>{
//   var query = 'select date_format(`index`, "%Y년 %m월 %d일 %H:%i:%s") as date, '
//   +' `Encored.Gwangjin02.Inverter01.Efficiency` as effi,' 
//   +' `Encored.Gwangjin02.Inverter01.Ir` as ir,' 
//   +' `Encored.Gwangjin02.Inverter01.P` as p' 
//   +' from `Gwangjin02.Inverter01`' 
//   +' ORDER BY `index` DESC limit 5';
 
//  db.query(query,(err,rows,fileds)=>{
//    if(!err){

//      console.log(rows);
//      res.send(rows);
//    }
//    else{
//      console.log(err);
//    }
//  })
// })




module.exports = router;
