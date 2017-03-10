
//Constants
import equivalents from '/Framework/V1.0/Constants/CSS/equivalents';
import vendors from '/Framework/V1.0/Constants/CSS/vendors';
import tags from '/Framework/V1.0/Constants/HTML/tags';

	//Keys
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import destructor from '/Framework/V1.0/Constants/Keys/General/destructor';
import on from '/Framework/V1.0/Constants/Keys/General/on';
import state from '/Framework/V1.0/Constants/Keys/Stateful/state';
import trigger from '/Framework/V1.0/Constants/Keys/General/trigger';
import uid from '/Framework/V1.0/Constants/Keys/General/uid';

import eventfulOn from '/Framework/V1.0/Constants/Keys/Eventful/on';
import eventfulTrigger from '/Framework/V1.0/Constants/Keys/Eventful/trigger';
import extensibleAdd from '/Framework/V1.0/Constants/Keys/Extensible/add';
import extensibleRemove from '/Framework/V1.0/Constants/Keys/Extensible/remove';

import bindReceiptNormalize from '/Framework/V1.0/Constants/Keys/BindReceipt/normalize';
import bindReceiptOn from '/Framework/V1.0/Constants/Keys/BindReceipt/on';
import bindReceiptTo from '/Framework/V1.0/Constants/Keys/BindReceipt/to';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

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

exports(Constants).as('/Framework/V1.0/JSUI/Constants');
