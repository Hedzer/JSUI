
//Utilities
import exports from 'Parcello/exports';

export default function _function(method, args) {
	method.call(this, args);
	return this;
}

exports(_function).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Do/_function');
