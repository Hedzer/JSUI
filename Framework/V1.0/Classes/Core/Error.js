//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
import native from '/Framework/V1.0/Utilities/Classes/native';

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

exports(JSUIError).as('/Framework/V1.0/Classes/Core/JSUIError');
