//Utilities
import exports from 'Parcello/exports';
import native from 'JSUI/Source/1.0.0/Utilities/Classes/native';

export default class JSUIError extends native(Error) {
	constructor(title, message, severity) {
		super();
	}

	//methods
	throw(title, message, severity) {
		if (window.console && window.console.trace) {
			console.trace(title || '');
		}
	}
}

exports(JSUIError).as('JSUI/Source/1.0.0/Classes/Core/JSUIError');
