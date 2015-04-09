var fs = require('fs');

exports.readData = function (datafile) {
    var data = fs.readFileSync(datafile, 'utf8');
    return JSON.parse(data);
};
