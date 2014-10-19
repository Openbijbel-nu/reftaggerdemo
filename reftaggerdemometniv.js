/**
 * This code is used to create an toolbar for debijbel.nl
 */

 //global reftagger settings (default settings)
 var refTagger = {
		settings: {
			bibleReader: "bible.faithlife",
			bibleVersion: "NIV"			
		}
	};

// using anonymous self executing function to protect the functions in their own scope
// see: http://markdalgleish.com/2011/03/self-executing-anonymous-functions/
 (function (window, document, $, undefined) {

 	/**
 	 * For including scripts
 	 */
 	 function require(scriptUrl, optionalClassName, onLoadFunction) {
 	 	var s = document.createElement('script');

 	 	s.type = 'text/javascript';
 	 	s.src = scriptUrl;

 	 	if (typeof(optionalClassName) != 'undefined')
 	 		s.className = optionalClassName;

 	 	if (typeof(onLoadFunction) != 'undefined') {
 	 		s.onreadystatechange = onLoadFunction;
 	 		s.onload = onLoadFunction;
 	 	}

 	 	document.getElementsByTagName('head')[0].appendChild(s);

 	 }

 	 /**
 	  * Loads the refTagger script with a protocol independant URL
 	  */
 	 function loadRefTagger(onLoadFunction) {
 	 	require('//api.reftagger.com/v2/RefTagger.js', 'openbijbelreftaggerscript', onLoadFunction);
 	 }

 	 /**
 	  * Loads the bible translation. By default it's NIV.
 	  */
 	function chooseTranslation(translation) {
 		if (typeof(translation) == 'undefined') {
 			translation = 'NIV';
 		}

 		// set the already existing global variable with new options (so no var before this variable)
 		refTagger = {
			settings: {
				bibleReader: "bible.faithlife",
				bibleVersion: translation		
			}
		};

 	}

 	/**
 	 * This function gets executed after all is loaded. This gives a main entrypoint for the code
 	 */
 	function main() {
 		// choose default translation
 		chooseTranslation("NIV");

	  $("a.rtBibleRef").css("background-color","black").css("color","white");

 	}

 	// execute the main function
 	main();
 })(window, document, jQuery);
