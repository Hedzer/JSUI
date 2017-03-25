
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

let htmlRegex = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
export default function isHTML(u) {
	return htmlRegex.test(u);
}

exports(isHTML).as('/JSUI/Source/V1.0/TypeChecks/isHTML');
