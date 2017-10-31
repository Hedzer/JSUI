
//Handlers
import _array from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/AddTo/_array';
import _dom from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/AddTo/_dom';
import _element from 'JSUI/Source/1.0.0/Classes/Core/Element/Handlers/AddTo/_element';

//Utilities
import exports from 'Parcello/exports';

let AddTo = {
	array: _array,
	dom: _dom,
	element: _element,
};

export default AddTo;

exports(AddTo).as('JSUI/Source/1.0.0/Classes/Core/Element/Handlers/AddTo');
