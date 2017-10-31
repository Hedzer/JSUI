
//Utilities
import exports from 'Parcello/exports';

let tags = [
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
	'wbr',
];

export default tags;

exports(tags).as('JSUI/Source/1.0.0/Constants/HTML/tags');
