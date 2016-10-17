import getTagName from 'Framework/Utilities/Elements/getTagName';
import childNodes from 'Framework/Utilities/Elements/childNodes';
import doOrSet from 'Framework/Utilities/Properties/doOrSet';
import getter from 'Framework/Utilities/Paths/getter';
import isNativeTag from 'Framework/TypeChecks/isNativeTag';
import isTextNode from 'Framework/TypeChecks/isTextNode';
import onParsedElementChanged from 'Framework/Reflection/XML/Parse/Events/onParsedElementChanged';


export default function _default(node, classes, container) {
	let tag = getTagName(node);
	let type = tag.split('-').reduce(getter, classes);
	if (!type) {
		//WARN
		return undefined;
	}
	let instance = new type();
	let attributes = node.attributes;
	let isNative = isNativeTag(tag);
	for (let i = attributes.length - 1; i >= 0; i--) {
		let attribute = attributes[i];
		let name = attribute.name;
		let value = attribute.value;
		instance.element.setAttribute(name, value);
		if (instance.hasOwnProperty(name)) {
			doOrSet(instance, name, value);
			continue;
		}
		instance.add(name);
		instance.on(`${name}Changed`, onParsedElementChanged);
		instance[name] = value;
	};
	let textNodes = [];
	childNodes(node, (child) => {
		if (isTextNode(child)) {
			let node = document.createTextNode("");
			instance.element.appendChild(node);
			instance.private.text = node;
			textNodes.push({node:node, value:child.nodeValue});
			return;
		}
		let as = child.getAttribute('as');
		let handle = instance.add(_default(child, classes));
		if (as) {
			if (handle && isFunction(handle.as)) {
				handle.as(as);
			}						
		}
		return;
	});
	//for some reason, text nodes need to be set at the end
	textNodes.forEach((textNode) => {
		textNode.node.nodeValue = textNode.value;
	});
	return instance;
}