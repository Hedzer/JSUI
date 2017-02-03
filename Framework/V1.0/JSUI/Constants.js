import equivalents from '/Framework/V1.0/Constants/CSS/equivalents';
import vendors from '/Framework/V1.0/Constants/CSS/vendors';
import tags from '/Framework/V1.0/Constants/HTML/tags';

//Keys
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import on from '/Framework/V1.0/Constants/Keys/General/on';
import trigger from '/Framework/V1.0/Constants/Keys/General/trigger';
import state from '/Framework/V1.0/Constants/Keys/General/state';
import uid from '/Framework/V1.0/Constants/Keys/General/uid';
import destructor from '/Framework/V1.0/Constants/Keys/General/destructor';

import extensibleOn from '/Framework/V1.0/Constants/Keys/Extensible/on';
import extensibleTrigger from '/Framework/V1.0/Constants/Keys/Extensible/trigger';
import extensibleAdd from '/Framework/V1.0/Constants/Keys/Extensible/add';
import extensibleRemove from '/Framework/V1.0/Constants/Keys/Extensible/remove';

import bindReceiptNormalize from '/Framework/V1.0/Constants/Keys/BindReceipt/normalize';
import bindReceiptOn from '/Framework/V1.0/Constants/Keys/BindReceipt/on';
import bindReceiptTo from '/Framework/V1.0/Constants/Keys/BindReceipt/to';

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
		BindReceipt: {
			normalize: bindReceiptNormalize,
			on: bindReceiptOn,
			to: bindReceiptTo
		},
		General: {
			on: on,
			private: $private,
			state: state,
			trigger: trigger,
			uid: uid,
			destructor: destructor
		}
	}
};

export default Constants;