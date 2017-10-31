
//Handlers
import _array from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Remove/_array';
import _element from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Remove/_element';
import _undefined from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Remove/_undefined';

//Utilities
import exports from 'Parcello/exports';

let Remove = {
	array: _array,
	element: _element,
	undefined: _undefined,
};

export default Remove;

exports(Remove).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/Remove');