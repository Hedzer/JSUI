import equivalents from 'Framework/Constants/CSS/equivalents';
import vendors from 'Framework/Constants/CSS/vendors';
import tags from 'Framework/Constants/HTML/tags';

//Keys
import $private from 'Framework/Constants/Keys/General/private';
import on from 'Framework/Constants/Keys/General/on';
import trigger from 'Framework/Constants/Keys/General/trigger';
import state from 'Framework/Constants/Keys/General/state';
import uid from 'Framework/Constants/Keys/General/uid';
import destructor from 'Framework/Constants/Keys/General/destructor';

import extensibleOn from 'Framework/Constants/Keys/Extensible/on';
import extensibleTrigger from 'Framework/Constants/Keys/Extensible/trigger';
import extensibleAdd from 'Framework/Constants/Keys/Extensible/add';
import extensibleRemove from 'Framework/Constants/Keys/Extensible/remove';

let Constants = {
	CSS: {
		equivalents: equivalents,
		vendors: vendors
	},
	HTML: {
		tags: tags
	},
	Keys: {
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