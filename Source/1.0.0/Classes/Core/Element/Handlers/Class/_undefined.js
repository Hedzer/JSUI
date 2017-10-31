
//Utilities
import exports from 'Parcello/exports';
import getClasses from 'JSUI/Source/1.0.0/Utilities/Elements/getClasses';

export default function _undefined() {
	return getClasses(this.element);
}

exports(_undefined).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Class/_undefined');
