import getTagName from 'Framework/Utilities/Elements/getTagName';
import childNodes from 'Framework/Utilities/Elements/childNodes';
import doOrSet from 'Framework/Utilities/Properties/doOrSet';
import getter from 'Framework/Utilities/Paths/getter';
import isNativeTag from 'Framework/TypeChecks/isNativeTag';
import isTextNode from 'Framework/TypeChecks/isTextNode';
import onParsedElementChanged from 'Framework/Reflection/XML/Parse/Events/onParsedElementChanged';


export default function _default(node, classes, container) {
	var tag = getTagName(node);
	var type = tag.split('-').reduce(getter, classes);
	if (!type) {
		//WARN
		return undefined;
	}
	var instance = new type();
	var attributes = node.attributes;
	var isNative = isNativeTag(tag);
	for (var i = attributes.length - 1; i >= 0; i--) {
		var attribute = attributes[i];
		var name = attribute.name;
		var value = attribute.value;
		instance.element.setAttribute(name, value);
		if (instance.hasOwnProperty(name)) {
			doOrSet(instance, name, value);
			continue;
		}
		instance.add(name);
		instance.on(`${name}Changed`, onParsedElementChanged);
		instance[name] = value;
	};
	var textNodes = [];
	childNodes(node, (child) => {
		if (isTextNode(child)) {
			var node = document.createTextNode("");
			instance.element.appendChild(node);
			instance.private.text = node;
			textNodes.push({node:node, value:child.nodeValue});
			return;
		}
		var as = child.getAttribute('as');
		var handle = instance.add(_default(child, classes));
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