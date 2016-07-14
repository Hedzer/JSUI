define(function(require, exports, module) {
	var jsui = require('JSUI');
	var style = require('./application/style');

	//element shorthands
	var div = jsui.Elements.div;


	//class declaration
	class application extends div {
		constructor() {
			super();
			this.identity = 'application';
			this.style.sheet = style;
		}
	}

	return application;
});