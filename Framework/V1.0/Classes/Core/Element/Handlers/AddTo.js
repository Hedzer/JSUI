
//Handlers
import _array from '/Framework/V1.0/Classes/Core/Element/Handlers/AddTo/_array';
import _dom from '/Framework/V1.0/Classes/Core/Element/Handlers/AddTo/_dom';
import _element from '/Framework/V1.0/Classes/Core/Element/Handlers/AddTo/_element';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let AddTo = {
	array: _array,
	dom: _dom,
	element: _element,
};

export default AddTo;

exports(AddTo).as('/Framework/V1.0/Classes/Core/Element/Handlers/AddTo');
