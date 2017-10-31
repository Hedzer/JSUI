
//Utilities
import exports from 'Parcello/exports';
import on from 'JSUI/Source/1.0.0/Utilities/Events/on';

export default function _string(name, method) {
	return on.call(this, name, method);
}

exports(_string).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/On/_string');
