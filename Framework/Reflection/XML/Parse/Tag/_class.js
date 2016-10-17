import getFirstNonTextChild from 'Framework/Utilities/Elements/getFirstNonTextChild';
import getTagName from 'Framework/Utilities/Elements/getTagName';
import uid from 'Framework/Utilities/General/uid';
import getter from 'Framework/Utilities/Paths/getter';
import htmlToInstructions from 'Framework/Reflection/XML/Parse/htmlToInstructions';
import feval from 'Framework/Reflection/feval';
import Element from 'Framework/Classes/Element';
import constructor from 'Framework/Classes/Element/constructor';

export default function _class(node, classes, container) {
	let children = node.childNodes;
	let count = children.length;
	let root = getFirstNonTextChild(node);
	if (!root) { return; }
	let tag = getTagName(root);
	let name = (container.getAttribute('name') || 'Anonymous'+uid());
	let inherits = container.getAttribute('inherits');
	let asTag = (container.getAttribute('tag') || tag);
	let parent;
	if (inherits) {
		parent = inherits.split('-').reduce(getter, classes);
	}
	parent = (parent || element);
	let instruction = htmlToInstructions(root, classes);
	let aliases = Object.keys(instruction.state.aliases);
	//build headers
	let header = ['\n\t\/\/ Imports'];
	aliases.forEach((alias) => {
		header.push(`\tlet ${alias} = classes.${alias}.type;`);
	});
	header.push('\n');
	//build text
	let texts = {};
	let textNodes = [];
	instruction.text.forEach((text) => {
		let name = text.name;
		let value = text.value;
		texts[name] = value;
		textNodes.push(`\t${name}.nodeValue = texts.${name};`);
	});
	let built = 
		`\n return (function compile(element, constructor, classes, texts, inherits) {\n` +
			header.join('\n') +
			`\n\tfunction ${name}() { \n` +
				`\tconstructor = (inherits === element ? constructor : inherits.constructor);\n` +
				`\tconstructor.call(this, '${asTag}'); \n` +
				`\tthis.type = '${name}'; \n\n` +
				`\t\/\/ Generated \n` +
				instruction.code + '\n\n' +
				`\t\/\/ Assign Text Values \n` +
				textNodes.join('\n') + 
			`\n}\n` +
			`\n\t${name}.prototype = Object.create(inherits.prototype);\n` +
			`\n\t${name}.constructor = ${name};\n` +
			`\t return ${name};\n` +
		`});`
	;
	let compiled = feval.call(window, built)(
		Element,
		constructor,
		instruction.state.aliases,
		texts,
		parent
	);
	return compiled;
}