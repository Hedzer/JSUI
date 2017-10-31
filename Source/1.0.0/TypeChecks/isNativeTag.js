
//Constants
import tags from 'JSUI/Source/1.0.0/Constants/HTML/tags';

//Utilities
import exports from 'Parcello/exports';

let Natives = {};
tags.forEach((tag) => {
	Natives[tag] = true;
});

export default function isNativeTag(u) {
	return !!Natives[u];
}

exports(isNativeTag).as('JSUI/Source/1.0.0/TypeChecks/isNativeTag');
