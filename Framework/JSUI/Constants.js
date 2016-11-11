import equivalents from 'Framework/Constants/CSS/equivalents';
import vendors from 'Framework/Constants/CSS/vendors';
import tags from 'Framework/Constants/HTML/tags';

//symbols
import $private from 'Framework/Constants/Symbols/General/private';
import on from 'Framework/Constants/Symbols/General/on';
import trigger from 'Framework/Constants/Symbols/General/trigger';
import state from 'Framework/Constants/Symbols/General/state';
import uid from 'Framework/Constants/Symbols/General/uid';
import destructor from 'Framework/Constants/Symbols/General/destructor';

import extensibleOn from 'Framework/Constants/Symbols/Extensible/on';
import extensibleTrigger from 'Framework/Constants/Symbols/Extensible/trigger';
import extensibleAdd from 'Framework/Constants/Symbols/Extensible/add';
import extensibleRemove from 'Framework/Constants/Symbols/Extensible/remove';

let Constants = {
	CSS: {
		equivalents: equivalents,
		vendors: vendors
	},
	HTML: {
		tags: tags
	},
	Symbols: {
		Extensible: {
			on: extensibleOn,
			trigger: extensibleTrigger,
			add: extensibleAdd,
			remove: extensibleRemove,
		},
		on: on,
		private: $private,
		state: state,
		trigger: trigger,
		uid: uid,
		destructor: destructor
	}
};

export default Constants;