'use strict';
let fs = require('fs');
function capitalize(text){
	return text.charAt(0).toUpperCase() + text.slice(1);
};
let elements = '{\t';
let imports = '';
[
	'a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio',
	'b', 'base', 'basefont', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button',
	'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command',
	'datalist', 'dd', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt',
	'em', 'embed',
	'fieldset', 'figcaption', 'figure', 'footer', 'form',
	'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html',
	'i', 'iframe', 'img', 'input', 'ins',
	'kbd', 'keygen',
	'label', 'legend', 'li', 'link',
	'main', 'map', 'mark', 'menu', 'meta', 'meter',
	'nav', 'noscript',
	'object', 'ol', 'optgroup', 'option', 'output',
	'p', 'param', 'pre', 'progress',
	'q',
	'rp', 'rt', 'ruby',
	's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup',
	'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track',
	'u', 'ul',
	'video',
	'wbr'
].forEach((tag) => {
	let name = capitalize(tag);
	fs.writeFileSync(`${name}.js`, [
		`import Element from 'Framework/Classes/Element';\n`,
		`import Identity from 'Framework/Classes/Identity';\n\n`,
		`const identity = new Identity({\n`,
			`\tclass: '${name}',\n`,
			`\tmajor: 1, minor: 0, patch: 0\n`,
		`});\n\n`,
		`export default class ${name} extends Element {\n`,
			`\tconstructor() {\n`,
			`\t\tsuper('${tag}');\n`,
			`\t\tthis.identity = identity;\n`,
			`\t}\n`,
		`}`
	].join(''));
	imports += `import ${name} from 'Framework/Classes/Elements/${name}';\n`;
	elements += `\n\t${name}: ${name},`;
});
elements += '\n};';
fs.writeFileSync(`Elements.js`, imports + '\n' + elements);