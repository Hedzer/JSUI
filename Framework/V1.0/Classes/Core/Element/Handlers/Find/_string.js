//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function _string(query) {
	let results = null;
	results = this.element.querySelectorAll(query);
	results = (!results || results === null ? [] : results);
	return results;
}

exports(_string).as('/Framework/V1.0/Classes/Core/Element/Handlers/Find/_string');
