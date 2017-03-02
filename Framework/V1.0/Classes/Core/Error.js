import native from '/Framework/V1.0/Utilities/Classes/native';

export default class JSUIError extends native(Error) {
	constructor(title, message, severity) {
		super();
	}
	throw(title, message, severity) {
		if (window.console && window.console.trace) {
			console.trace(title || '');
		}
	}
}