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
	return dictionary;

})(Languages);