
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let htmlRegex = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
export default function isHTML(u) {
	return htmlRegex.test(u);
}

exports(isHTML).as('/Framework/V1.0/TypeChecks/isHTML');
