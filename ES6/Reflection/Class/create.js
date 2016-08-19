import Element from '../../Classes/Element';
import { constructor as elementConstructor } from '../../Classes/Element/constructor';
import feval from '../feval';

export function create(name, tag, inherits, constructor) {
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
}