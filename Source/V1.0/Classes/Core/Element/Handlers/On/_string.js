
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';
import on from '/JSUI/Source/V1.0/Utilities/Events/on';

export default function _string(name, method) {
	return on.call(this, name, method);
}

exports(_string).as('/JSUI/Source/V1.0/Classes/Core/Element/Handlers/On/_string');
