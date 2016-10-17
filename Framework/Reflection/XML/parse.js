import isString from 'Framework/TypeChecks/isString';
import isElement from 'Framework/TypeChecks/isElement';
import getFirstNonTextChild from 'Framework/Utilities/Elements/getFirstNonTextChild';
import getTagName from 'Framework/Utilities/Elements/getTagName';
import Tag from 'Framework/Reflection/XML/Parse/Tag';
import Elements from 'Framework/Classes/Elements';

export default function parse(html, classes) {
	let container;
	if (isString(html)) {
		container = document.createElement('container');
		container.innerHTML = html;				
	}
	if (isElement(html)) {
		container = html;
	}
	if (!container) { return; }
	let root = getFirstNonTextChild(container);
	let tag = getTagName(root);
	let parser = Tag[tag];
	return (parser || Tag.default).call(this, root, (classes || Elements), root);
}