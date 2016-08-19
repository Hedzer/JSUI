define(function(require, exports, module) {
	var JSUI = (function() {
		'use strict';

		//sugary checks
		
		function cacheable(name) {
			exported.Cache = (exported.Cache || {});
			exported.Cache[name] = (exported.Cache[name] || {});
		};

			/*
				Stylesheet types
					1. Reset
					2. Application
					3. Page 
			*/
		var exported = {
			Settings:{
				Development: {
					enabled: false,
					traceErrors: true,
					haltOnErrors: true
				},
				Production: {}
			},
			element: element,
			Elements: {},
			behavior: behavior,
			Behaviors: {},
			Markup: {
				parse: Parser.parse
			},
			Style:{
				sheet: styleSheet,
				rule: styleSheetRule,
				inline: styleInline
			},
			Cache:{}
		};


		return exported
	})();
	return JSUI;
});
