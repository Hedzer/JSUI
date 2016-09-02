import Element from '/Framework/Classes/Element';
import { default as elementConstructor } from '/Framework/Classes/Element/constructor';
import cleanName from '/Framework/Utilities/Functions/cleanName';
import feval from '/Framework/Reflection/feval';

export default (function create(name, tag, inherits, constructor) {
	name = cleanName(name);
	var inherit = (inherits || Element);
	var construct = (constructor || elementConstructor);
	var src = `
		return (function(element, constructor) {
			function ${name}() {
				constructor.call(this, '${tag}');
				this.type = '${tag}';
			}
			${name}.prototype = Object.create(element.prototype);
			${name}.constructor = ${name};
			return ${name};					
		})
	`;
	return feval.call(window, src)(inherit, construct);
});