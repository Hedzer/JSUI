define(function(require, exports, module) {
	var jsui = require('JSUI');
	var style = require('./feature/style');
	var page = require('./page');

	function isPage(u) {
		return (u instanceof page);
	}
	function isUPage(u) {
		return (u.prototype instanceof page);
	}

	//a application has features, and an entry feature (probably home)
	class feature extends jsui.element {
		constructor() {
			super('jsui-feature');
			this.style.sheet = style;
		}
		add(page) {
			if (isPage(page)) {

			}
			if (isUPage(page)) {

				
			}
		}
		remove(alias) {}
		launch() {}
		quit() {}
		hide() {}
		show() {}
		get route() {}
		set route(name) {}
		get page() {}
		get pages() {} 		//get the pages
		get default() {} 	//the home page to show
		set default(alias) {}
	} 

	return feature;
});