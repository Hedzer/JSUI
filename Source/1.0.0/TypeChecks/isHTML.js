
//Utilities
import exports from 'Parcello/exports';

let htmlRegex = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
export default function isHTML(u) {
	return htmlRegex.test(u);
}

exports(isHTML).as('JSUI/Source/1.0.0/TypeChecks/isHTML');
