import getTagName from 'Framework/Utilities/Elements/getTagName';
import getter from 'Framework/Utilities/Paths/getter';
import childNodes from 'Framework/Utilities/Elements/childNodes';
import isUJSUI from 'Framework/TypeChecks/isUJSUI';
import isTextNode from 'Framework/TypeChecks/isTextNode';

export default function htmlToInstructions(node, classes, state) {
	var isRoot = false;
	if (!state) {
		state = {
			map:{},
			aliases:{},
			Counts:{
				element:0,
				instance:0,
				text:0
			}
		};
		isRoot = true;				
	}
	var tag = getTagName(node);
	var directory = state.map[tag];
	var alias;
	if (!directory) {
		var type = tag.split('-').reduce(getter, classes);
		if (!isUJSUI(type)) {return; }
		alias = 'element'+state.Counts.element;
		state.Counts.element++;
		directory = {
			type:type,
			alias:alias
		};
		state.map[tag] = directory;
		state.aliases[alias] = directory;
	}
	if (!alias) {alias = directory.alias};
	var as = node.getAttribute('as');
	var name = 'instance'+state.Counts.instance;
	state.Counts.instance++;
	var comments = "\t\/\/ "+(as || 'Anonymous Element');
	var instantiation = `\tvar ${name} = ` + (isRoot ? 'this' :  `new ${alias}();`);

	var assignments = [];
	var instructions = [];
	var texts = [];
	childNodes(node, (child) => {
		if (isTextNode(child)) {
			var textName = 'text'+state.Counts.text;
			instructions.push(`\tvar ${textName} = document.createTextNode('');`);
			instructions.push(`\t${name}.element.appendChild(${textName});`);
			assignments.push({
				name:textName,
				value:child.nodeValue
			});
			state.Counts.text++;
			return;
		}
		instructions.push('\n');
		var instruction = htmlToInstructions(child, classes, state);
		var childName = instruction.name;
		instructions.push(instruction.code);
		instructions.push('\n\t\/\/ Adding Children');
		instructions.push(`\t${name}.add(${childName})`+(as ? `.as('${as}')` : '')+';');
		instructions.push('\n\t\/\/ Text Node Assignments');
		texts.push(instruction.text);
		return;
	});
	//add the last text as primary
	var lastText = assignments[assignments.length - 1];
	var lastTextName = lastText.name;
	instructions.push(`\t${name}.private.text = ${lastTextName};`);
	assignments = Array.prototype.concat.apply(assignments, texts);
	instructions = instructions.join('\n');
	return {
		tag:tag,
		directory:directory,
		name:name,
		code:[comments, instantiation, instructions].join('\n'),
		as:as,
		text:assignments,
		state:state
	};	
}