/* global require console */
var _ = require('underscore'),
    fs = require('fs'),
    extendify = require('extendify'),
    file1 = process.argv[2],
    file2 = process.argv[3];

    _.extend = extendify({
	inPlace: false,
	arrays : 'concat',
	isDeep: true
    });
    primary = false;
    if (fs.existsSync(file2)) { 
	    oldJson = JSON.parse(fs.readFileSync(file2, 'utf-8'));
    } else {
	    oldJson = {};
    }
    if (fs.existsSync(file1)) {
	    newJson = JSON.parse(fs.readFileSync(file1, 'utf-8'));
	    primary = true;
    } else {
	    newJson = {};
    }
    if (primary) {
    	output = _.extend(newJson, oldJson);
    } else {
	output = _.extend(oldJson, newJson);
    }
    printableJson = JSON.stringify(output, null, 2);

    fs.writeFile(file1, printableJson, function(err) {
      if (err) throw('File save error: '+ err);
    });
