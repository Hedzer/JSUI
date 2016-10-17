//Elements
import addClass from 'Framework/Utilities/Elements/addClass';
import getClasses from 'Framework/Utilities/Elements/getClasses';
import childNodes from 'Framework/Utilities/Elements/childNodes';
import getFirstNonTextChild from 'Framework/Utilities/Elements/getFirstNonTextChild';
import getTagName from 'Framework/Utilities/Elements/getTagName';
import getTextNodes from 'Framework/Utilities/Elements/getTextNodes';
import nodeAttributes from 'Framework/Utilities/Elements/nodeAttributes';

//Events
import remove from 'Framework/Utilities/Events/remove';
import removeAll from 'Framework/Utilities/Events/removeAll';
import on from 'Framework/Utilities/Events/on';

//Functions
import debounce from 'Framework/Utilities/Functions/debounce';

//General
import uid from 'Framework/Utilities/General/uid';

//Paths
import get from 'Framework/Utilities/Paths/get';
import getter from 'Framework/Utilities/Paths/getter';
import set from 'Framework/Utilities/Paths/set';
import setter from 'Framework/Utilities/Paths/setter';
import getWithContext from 'Framework/Utilities/Paths/getWithContext';

//Properties
import add from 'Framework/Utilities/Properties/add';
import doOrSet from 'Framework/Utilities/Properties/doOrSet';
import getAll from 'Framework/Utilities/Properties/getAll';

//Strings
import capitalize from 'Framework/Utilities/Strings/capitalize';
import uncapitalize from 'Framework/Utilities/Strings/uncapitalize';

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
		debounce: debounce
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
	}
};

export default Utilities;