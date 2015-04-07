var express = require('express');
var fs = require('fs');
var datafile = 'server/data/schools.json';
var router = express.Router();

/* GET all schools */
/* http://localhost:3000/api/schools */
router.route('/')
    .get(function(req, res) {
        var data = getSchoolData();
        res.send(data);
    });

/* GET, PUT and DELETE individual schools */
router.route('/:id')

    .get(function(req, res) {

        //console.log('Retrieving book id: ' + req.params.id);

        var data = getSchoolData();

        var matchingSchools = data.filter(function(item) {
            return item.school_id == req.params.id;
        });

        if(matchingSchools.length === 0) {
            res.sendStatus(404);
        } else {
            res.send(matchingSchools[0]);
        }
    });

function getSchoolData() {
    var data = fs.readFileSync(datafile, 'utf8');
    return JSON.parse(data);
}

module.exports = router;
