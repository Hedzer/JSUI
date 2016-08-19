define(function(require, exports, module) {
	var jsui = require('JSUI');
	var style = new jsui.Style.rule('jsui-application', {
		position:'absolute',
		display: 'block',
		top:'0',
		right:'0',
		bottom: '0',
		left: '0'
	});
	return style;
});