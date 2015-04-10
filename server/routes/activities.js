var express = require('express');
var helper = require('../helpers');
var datafile = 'server/data/activities.json';
var router = express.Router();

/* GET all classrooms */
/* http://localhost:3000/api/activities */
router.route('/')
    .get(function(req, res) {
        var data = helper.readData(datafile);
        res.send(data);
    });

/* GET, PUT and DELETE individual classrooms */
router.route('/:id')

    .get(function(req, res) {

        var data = helper.readData(datafile);

        var matchingActivities = data.filter(function(item) {
            return item.activity_id == req.params.id;
        });

        if(matchingActivities.length === 0) {
            res.sendStatus(404);
        } else {
            res.send(matchingActivities[0]);
        }
    });

module.exports = router;
