"use strict";

var Languages = (function(dictionary) {

	var frenchWords = {
		merry: "joyeaux",
		christmas: "Noel",
		and: "et",
		happy: "content",
		new: "nouveau",
		year: "an"
	};

	dictionary.setFrench = function(word) {
		return frenchWords[word];
	};
	dictionary.getFrenchName = function(word) {
		var valsArray = Object.values(frenchWords);
		var keysArray = Object.keys(frenchWords);
		for (var arrayNum = 0; arrayNum < valsArray.length; arrayNum++) {
			if (word === valsArray[arrayNum]) {
				return keysArray[arrayNum];
			}
		}
	};
	return dictionary;

})(Languages);