var jsonfilereader = require('./jsonfilereader')

function countryInformation(info){

	
for (var i = 0; i < info.length; i++) {
	if (info[i].name===process.argv[2])	{

console.log("Country: " + info[i].name); 

console.log("TopLevelDomain: " + info[i].topLevelDomain); 
	}
}

}

jsonfilereader.readParse ("./countries.json", countryInformation)




