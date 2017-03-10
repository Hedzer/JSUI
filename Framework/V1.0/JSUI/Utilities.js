//Elements
import addClass from '/Framework/V1.0/Utilities/Elements/addClass';
import childNodes from '/Framework/V1.0/Utilities/Elements/childNodes';
import getClasses from '/Framework/V1.0/Utilities/Elements/getClasses';
import getFirstNonTextChild from '/Framework/V1.0/Utilities/Elements/getFirstNonTextChild';
import getTagName from '/Framework/V1.0/Utilities/Elements/getTagName';
import getTextNodes from '/Framework/V1.0/Utilities/Elements/getTextNodes';
import nodeAttributes from '/Framework/V1.0/Utilities/Elements/nodeAttributes';

//Events
import on from '/Framework/V1.0/Utilities/Events/on';
import remove from '/Framework/V1.0/Utilities/Events/remove';
import removeAll from '/Framework/V1.0/Utilities/Events/removeAll';

//Functions
import debounce from '/Framework/V1.0/Utilities/Functions/debounce';
import throttle from '/Framework/V1.0/Utilities/Functions/throttle';

//General
import uid from '/Framework/V1.0/Utilities/General/uid';

//Paths
import get from '/Framework/V1.0/Utilities/Paths/get';
import getter from '/Framework/V1.0/Utilities/Paths/getter';
import getWithContext from '/Framework/V1.0/Utilities/Paths/getWithContext';
import set from '/Framework/V1.0/Utilities/Paths/set';
import setter from '/Framework/V1.0/Utilities/Paths/setter';

//Properties
import add from '/Framework/V1.0/Utilities/Properties/add';
import doOrSet from '/Framework/V1.0/Utilities/Properties/doOrSet';
import getAll from '/Framework/V1.0/Utilities/Properties/getAll';

//Strings
import capitalize from '/Framework/V1.0/Utilities/Strings/capitalize';
import uncapitalize from '/Framework/V1.0/Utilities/Strings/uncapitalize';

//Objects
import extend from '/Framework/V1.0/Utilities/Objects/extend';

//Dependencies
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';
let Utilities = {
	Elements: {
		addClass: addClass,
		getClasses: getClasses,
		childNodes: childNodes,
		getFirstNonTextChild: getFirstNonTextChild,
		getTagName: getTagName,
		getTextNodes: getTextNodes,
		nodeAttributes: nodeAttributes,
	},
	Events: {
		on: on,
		remove: remove,
		removeAll: removeAll,
	},
	Functions: {
		debounce: debounce,
		throttle: throttle,
	},
	General: {
		uid: uid,
	},
	Paths: {
		get: get,
		getter: getter,
		set: set,
		setter: setter,
		getWithContext: getWithContext,
	},
	Properties: {
		add: add,
		doOrSet: doOrSet,
		getAll: getAll,
	},
	Strings: {
		capitalize: capitalize,
		uncapitalize: uncapitalize,
	},
	Objects: {
		extend: extend,
	},
	Dependencies: {
		exports: exports,
	}
};

export default Utilities;

exports(Utilities).as('/Framework/V1.0/JSUI/Utilities');