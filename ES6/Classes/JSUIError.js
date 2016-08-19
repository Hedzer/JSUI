export default class JSUIError extends Error {
	constructor(title, message, severity) {
		super();
	}
	throw(title, message, severity) {
		if (window.console && window.console.trace) {
			console.trace(title || '');
		}
	}
}