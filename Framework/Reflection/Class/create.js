import Element from 'Framework/Classes/Element';
import { default as elementConstructor } from 'Framework/Reflection/Class/constructor';
import cleanName from 'Framework/Utilities/Functions/cleanName';
import feval from 'Framework/Reflection/feval';

export default (function create(name, tag, inherits, constructor) {
	name = cleanName(name);
	tag = tag.toLowerCase();
	let inherit = (inherits || Element);
	let construct = (constructor || elementConstructor);
	let src = `
		return (function(element, constructor) {
			function ${name}() {
				constructor.call(this, '${tag}');
				this.name = '${name}';
			}
			${name}.prototype = Object.create(element.prototype);
			${name}.constructor = ${name};
			return ${name};					
		})
	`;
	return feval.call(window, src)(inherit, construct);
});