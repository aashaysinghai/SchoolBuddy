var express = require('express');
var helper = require('../helpers');
var datafile = 'server/data/classrooms.json';
var router = express.Router();

/* GET all classrooms */
/* http://localhost:3000/api/classrooms */
router.route('/')
    .get(function(req, res) {
        var data = helper.readData(datafile);

        var schoolsDataFile = 'server/data/schools.json';
        var schoolsData = helper.readData(schoolsDataFile);

        // attach schools to the classrooms
        data.forEach(function(classroom, index, array) {
            classroom.school = helper.getItemsById(schoolsData, classroom.school_id)[0];
        });

        res.send(data);
    });

/* GET, PUT and DELETE individual classrooms */
router.route('/:id')

    .get(function(req, res) {

        var data = helper.readData(datafile);

        var matchingClassrooms = data.filter(function(item) {
            return item.school_id == req.params.id;
        });

        if(matchingClassrooms.length === 0) {
            res.sendStatus(404);
        } else {
            res.send(matchingClassrooms[0]);
        }
    });

module.exports = router;
