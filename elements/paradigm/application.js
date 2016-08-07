define(function(require, exports, module) {
	var jsui = require('JSUI');
	var style = require('./application/style');

	window.JSUI = jsui;
	//a application has features, and an default feature (probably home)
	class application extends jsui.element {
		constructor() {
			super('jsui-application');
			this.style.sheet = style;
			this.Routes = {};
		}
		add(feature) {}
		remove(alias) {}
		launch() {}
		quit() {}
		hide() {}
		show() {}
		get route() {}
		set route(name) {}
		get feature() {}
		get features() {}
		get default() {}
		set default(alias) {}
		destructor() {}
	} 

	return application;
});