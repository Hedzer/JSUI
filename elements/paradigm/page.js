define(function(require, exports, module) {
	var jsui = require('JSUI');
	var style = require('./page/style');
	var task = 

	class page extends jsui.element {
		constructor() {
			super('jsui-page');
		}
		add(task) {
			//if (isTask(task)) {}
			return super.add(task);
		}
		remove(alias) {}
		launch() {}
		quit() {}
		hide() {}
		show() {}
		get feature() {}
		set feature(feature) {}
		get route() {}
		set route(name) {}
		get tasks() {}
	}

	return page;
});