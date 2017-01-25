"use strict";

var Languages = (function(dictionary){

	var germanWords = {
		merry: "fröhlich",
		christmas: "Weihnachten",
		and: "und",
		happy: "glücklich",
		new: "neu",
		year: "Jahrs"

	};

	dictionary.setGerman = function(word){
		return germanWords[word];
	};
	dictionary.getGermanName = function(word) {
		var valsArray = Object.values(germanWords);
		var keysArray = Object.keys(germanWords);
		for (var arrayNum = 0; arrayNum < valsArray.length; arrayNum++) {
			if (word === valsArray[arrayNum]) {
				return keysArray[arrayNum];
			}
		}
	};
	return dictionary;

})(Languages);