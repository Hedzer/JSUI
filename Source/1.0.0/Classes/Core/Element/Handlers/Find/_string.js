//Utilities
import exports from 'Parcello/exports';

export default function _string(query) {
	let results = null;
	results = this.element.querySelectorAll(query);
	results = (!results || results === null ? [] : results);
	return results;
}

exports(_string).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Find/_string');
