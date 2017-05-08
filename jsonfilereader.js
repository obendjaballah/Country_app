
var fs = require('fs');
// wrap with function 
var readParse = function (filename, callBack){
fs.readFile(filename, 'utf-8', function(err, data){

	if (err) throw err;
	
	data = JSON.parse(data);

	callBack(data);
});
}

var readParse

exports.readParse = readParse




