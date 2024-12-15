let detect = require('language-detect');

const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();

console.log(lngDetector.detect('Es macht gut', 1));
console.log(lngDetector.detect('Dobra prace', 1));
console.log(lngDetector.detect('Gwaith da', 1)); 

// LanguageDetect can identify 52 human languages from text samples and return confidence scores for each.