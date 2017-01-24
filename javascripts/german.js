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
	return dictionary;

})(Languages);