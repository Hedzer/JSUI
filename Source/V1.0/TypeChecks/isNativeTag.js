
//Constants
import tags from '/JSUI/Source/V1.0/Constants/HTML/tags';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

let Natives = {};
tags.forEach((tag) => {
	Natives[tag] = true;
});

export default function isNativeTag(u) {
	return !!Natives[u];
}

exports(isNativeTag).as('/JSUI/Source/V1.0/TypeChecks/isNativeTag');
