//엄격한 코드 검사
'use strict';
/************* include library **************/
var express = require('express');
var db = require('./db');
var api     = express();




api.get('/sensor', (req, res, next) => {




    db.query('SELECT * FROM sensor_data', function(error, results, fields){
        if(error){
            console.log(error);
        }

    console.log(results);
    });
    res.send("Welcome is API Function");
});

api.post('/insSensor', (req, res, next) => {

    var sensorType = req.body.sensorType;// "";
    var sensorValue = req.body.sensorValue;//"";
    var userId = req.body.userId; //"";
    
    var sql = " insert into sensor_data (sensor_type, sensor_value, sensor_usr_id, ins_date, upd_date ) values ";
    sql += " ('"+ sensorType +"', "+ sensorValue +", '"+ userId +"', now() , now()) ";
    console.log(sql);

    console.log("init start");
    db.query(sql , function(error, results, fields){

        
        console.log(error);
        console.log(results);
        res.send(results);
    })

    //req.body.sensorIdx
    //req.body.sensorType
    //req.body.sensorValue

});


module.exports = api;