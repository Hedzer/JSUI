
//Constants
import equivalents from 'JSUI/Source/1.0.0/Constants/CSS/equivalents';
import vendors from 'JSUI/Source/1.0.0/Constants/CSS/vendors';
import tags from 'JSUI/Source/1.0.0/Constants/HTML/tags';

	//Keys
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';
import destructor from 'JSUI/Source/1.0.0/Constants/Keys/General/destructor';
import on from 'JSUI/Source/1.0.0/Constants/Keys/General/on';
import state from 'JSUI/Source/1.0.0/Constants/Keys/Stateful/state';
import trigger from 'JSUI/Source/1.0.0/Constants/Keys/General/trigger';
import uid from 'JSUI/Source/1.0.0/Constants/Keys/General/uid';

import eventfulOn from 'JSUI/Source/1.0.0/Constants/Keys/Eventful/on';
import eventfulTrigger from 'JSUI/Source/1.0.0/Constants/Keys/Eventful/trigger';
import extensibleAdd from 'JSUI/Source/1.0.0/Constants/Keys/Extensible/add';
import extensibleRemove from 'JSUI/Source/1.0.0/Constants/Keys/Extensible/remove';

import bindReceiptNormalize from 'JSUI/Source/1.0.0/Constants/Keys/BindReceipt/normalize';
import bindReceiptOn from 'JSUI/Source/1.0.0/Constants/Keys/BindReceipt/on';
import bindReceiptTo from 'JSUI/Source/1.0.0/Constants/Keys/BindReceipt/to';

//Utilities
import exports from 'Parcello/exports';

let Constants = {
	CSS: {
		equivalents: equivalents,
		vendors: vendors,
	},
	HTML: {
		tags: tags,
	},
	Keys: {
		BindReceipt: {
			normalize: bindReceiptNormalize,
			on: bindReceiptOn,
			to: bindReceiptTo,
		},
		Extensible: {
			add: extensibleAdd,
			on: eventfulOn,
			remove: extensibleRemove,
			trigger: eventfulTrigger,
		},
		General: {
			destructor: destructor,
			on: on,
			private: $private,
			state: state,
			trigger: trigger,
			uid: uid,
		},
	}
};

export default Constants;

exports(Constants).as('JSUI/Source/1.0.0/Entry/Constants');
