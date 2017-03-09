
//Handlers
import _array from '/Framework/V1.0/Classes/Core/Element/Handlers/AddTo/_array';
import _element from '/Framework/V1.0/Classes/Core/Element/Handlers/AddTo/_element';
import _jsui from '/Framework/V1.0/Classes/Core/Element/Handlers/AddTo/_jsui';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let AddTo = {
	array: _array,
	element: _element,
	jsui: _jsui,
};

export default AddTo;

exports(AddTo).as('/Framework/V1.0/Classes/Core/Element/Handlers/AddTo');
