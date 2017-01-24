"use strict";

var Languages = (function(dictionary){

	var englishToGerman = {
		merry: "fröhlich",
		christmas: "Weihnachten",
		and: "und",
		happy: "glücklich",
		new: "neu",
		year: "Jahrs"

	};

	dictionary.setGerman = function(word){
		var engWord = Object.keys(word);
		var germanWord = Object.values(word);
		englishToGerman[engWord[0]] = germanWord[0];

		console.log("New Dictionary: ", englishToGerman);

		return englishToGerman;
	};
	return dictionary;

})(Languages);



// {"merry":"god", 
// "christmas":"jul", 
// "and":"och", 
// "happy":"gott", 
// "new":"nytt", 
// "year":"år"}