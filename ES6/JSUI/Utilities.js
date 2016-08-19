//Elements
import addClass from '../Utilities/Elements/addClass';
import childNodes from '../Utilities/Elements/childNodes';
import getFirstNonTextChild from '../Utilities/Elements/getFirstNonTextChild';
import getTagName from '../Utilities/Elements/getTagName';
import getTextNodes from '../Utilities/Elements/getTextNodes';
import nodeAttributes from '../Utilities/Elements/nodeAttributes';

//Events
import remove from '../Utilities/Events/remove';
import removeAll from '../Utilities/Events/removeAll';

//Functions
import debounce from '../Utilities/Functions/debounce';

//General
import uid from '../Utilities/General/uid';

//Paths
import get from '../Utilities/Paths/get';
import getter from '../Utilities/Paths/getter';
import set from '../Utilities/Paths/set';
import setter from '../Utilities/Paths/setter';
import getWithContext from '../Utilities/Paths/getWithContext';

//Properties
import add from '../Utilities/Properties/add';
import doOrSet from '../Utilities/Properties/doOrSet';
import getAll from '../Utilities/Properties/getAll';

//Strings
import capitalize from '../Utilities/Strings/capitalize';
import uncapitalize from '../Utilities/Strings/uncapitalize';

var Utilities = {
	Elements: {
		addClass: addClass,
		childNodes: childNodes,
		getFirstNonTextChild: getFirstNonTextChild,
		getTagName: getTagName,
		getTextNodes: getTextNodes,
		nodeAttributes: nodeAttributes
	},
	Events: {
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