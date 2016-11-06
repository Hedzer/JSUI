//Elements
import addClass from 'Tests/Utilities/Elements/addClass';
import getClasses from 'Tests/Utilities/Elements/getClasses';
import childNodes from 'Tests/Utilities/Elements/childNodes';
import getFirstNonTextChild from 'Tests/Utilities/Elements/getFirstNonTextChild';
import getTagName from 'Tests/Utilities/Elements/getTagName';
import getTextNodes from 'Tests/Utilities/Elements/getTextNodes';
import nodeAttributes from 'Tests/Utilities/Elements/nodeAttributes';

// //Events
import on from 'Tests/Utilities/Events/on';
import remove from 'Tests/Utilities/Events/remove';
import removeAll from 'Tests/Utilities/Events/removeAll';

// //Functions
import debounce from 'Tests/Utilities/Functions/debounce';
import cleanName from 'Tests/Utilities/Functions/cleanName';

// //General
// import uid from 'Tests/Utilities/General/uid';

// //Paths
// import get from 'Tests/Utilities/Paths/get';
import getter from 'Tests/Utilities/Paths/getter';
// import set from 'Tests/Utilities/Paths/set';
// import setter from 'Tests/Utilities/Paths/setter';
// import getWithContext from 'Tests/Utilities/Paths/getWithContext';

// //Properties
// import add from 'Tests/Utilities/Properties/add';
// import doOrSet from 'Tests/Utilities/Properties/doOrSet';
// import getAll from 'Tests/Utilities/Properties/getAll';

// //Strings
import capitalize from 'Tests/Utilities/Strings/capitalize';
import uncapitalize from 'Tests/Utilities/Strings/uncapitalize';

var Utilities = {
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
		cleanName: cleanName
	},
	// General: {
	// 	uid: uid
	// },
	Paths: {
	// 	get: get,
	 	getter: getter,
	// 	set: set,
	// 	setter: setter,
	// 	getWithContext: getWithContext
	},
	// Properties: {
	// 	add: add,
	// 	doOrSet: doOrSet,
	// 	getAll: getAll
	// },
	Strings: {
		capitalize: capitalize,
		uncapitalize: uncapitalize
	}
};

export default Utilities;