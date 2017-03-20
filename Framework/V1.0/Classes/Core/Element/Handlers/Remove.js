
//Handlers
import _array from '/Framework/V1.0/Classes/Core/Element/Handlers/Remove/_array';
import _element from '/Framework/V1.0/Classes/Core/Element/Handlers/Remove/_element';
import _undefined from '/Framework/V1.0/Classes/Core/Element/Handlers/Remove/_undefined';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let Remove = {
	array: _array,
	element: _element,
	undefined: _undefined,
};

export default Remove;

exports(Remove).as('/Framework/V1.0/Classes/Core/Element/Handlers/Remove');