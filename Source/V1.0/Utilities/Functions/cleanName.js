
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

/*
	Code Pulled/Modified From: http://stackoverflow.com/questions/19669849/is-there-a-javascript-library-to-slugify-strings-into-valid-css-class-names
	Answer By: sqykly
*/
export default function cleanName(dirty) {
    let cleaned = dirty.replace(/^[^-_a-zA-Z]+/, '_').replace(/^-(?:[-0-9]+)/, '_');
    let result = cleaned && cleaned.replace(/[^-_a-zA-Z0-9]+/g, '_');
    return result;
}

exports(cleanName).as('/JSUI/Source/V1.0/Utilities/Functions/cleanName');
