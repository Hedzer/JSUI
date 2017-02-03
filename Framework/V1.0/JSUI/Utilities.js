//Elements
import addClass from '/Framework/V1.0/Utilities/Elements/addClass';
import getClasses from '/Framework/V1.0/Utilities/Elements/getClasses';
import childNodes from '/Framework/V1.0/Utilities/Elements/childNodes';
import getFirstNonTextChild from '/Framework/V1.0/Utilities/Elements/getFirstNonTextChild';
import getTagName from '/Framework/V1.0/Utilities/Elements/getTagName';
import getTextNodes from '/Framework/V1.0/Utilities/Elements/getTextNodes';
import nodeAttributes from '/Framework/V1.0/Utilities/Elements/nodeAttributes';

//Events
import remove from '/Framework/V1.0/Utilities/Events/remove';
import removeAll from '/Framework/V1.0/Utilities/Events/removeAll';
import on from '/Framework/V1.0/Utilities/Events/on';

//Functions
import debounce from '/Framework/V1.0/Utilities/Functions/debounce';
import throttle from '/Framework/V1.0/Utilities/Functions/throttle';

//General
import uid from '/Framework/V1.0/Utilities/General/uid';

//Paths
import get from '/Framework/V1.0/Utilities/Paths/get';
import getter from '/Framework/V1.0/Utilities/Paths/getter';
import set from '/Framework/V1.0/Utilities/Paths/set';
import setter from '/Framework/V1.0/Utilities/Paths/setter';
import getWithContext from '/Framework/V1.0/Utilities/Paths/getWithContext';

//Properties
import add from '/Framework/V1.0/Utilities/Properties/add';
import doOrSet from '/Framework/V1.0/Utilities/Properties/doOrSet';
import getAll from '/Framework/V1.0/Utilities/Properties/getAll';

//Strings
import capitalize from '/Framework/V1.0/Utilities/Strings/capitalize';
import uncapitalize from '/Framework/V1.0/Utilities/Strings/uncapitalize';

//Objects
import extend from '/Framework/V1.0/Utilities/Objects/extend';

//Data
import handle from '/Framework/V1.0/Utilities/Data/handle';

let Utilities = {
	Elements: {
		addClass: addClass,
		getClasses: getClasses,
		childNodes: childNodes,
		getFirstNonTextChild: getFirstNonTextChild,
		getTagName: getTagName,
		getTextNodes: getTextNodes,
		nodeAttributes: nodeAttributes
	},
	Events: {
		on: on,
		remove: remove,
		removeAll: removeAll
	},
	Functions: {
		debounce: debounce,
		throttle: throttle
	},
	General: {
		uid: uid
	},
	Paths: {
		get: get,
		getter: getter,
		set: set,
		setter: setter,
		getWithContext: getWithContext
	},
	Properties: {
		add: add,
		doOrSet: doOrSet,
		getAll: getAll
	},
	Strings: {
		capitalize: capitalize,
		uncapitalize: uncapitalize
	},
	Objects: {
		extend: extend
	},
	Data: {
		handle: handle
	}
};

export default Utilities;