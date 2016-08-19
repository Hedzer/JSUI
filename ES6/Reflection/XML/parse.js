import isString from '../../TypeChecks/isString';
import isElement from '../../TypeChecks/isElement';
import getFirstNonTextChild from '../../Utilities/Elements/getFirstNonTextChild';
import getTagName from '../../Utilities/Elements/getTagName';
import Tag from './Parse/Tag';
import Elements from '../../Classes/Elements';

export function parse(html, classes) {
	var container;
	if (isString(html)) {
		container = document.createElement('container');
		container.innerHTML = html;				
	}
	if (isElement(html)) {
		container = html;
	}
	if (!container) {return; }
	var root = getFirstNonTextChild(container);
	var tag = getTagName(root);
	var parser = Tag[tag];
	return (parser || Tag.default).call(this, root, (classes || Elements), root);
}