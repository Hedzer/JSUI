
//Constants
import tags from '/Framework/V1.0/Constants/HTML/tags';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let Natives = {};
tags.forEach((tag) => {
	Natives[tag] = true;
});

export default function isNativeTag(u) {
	return !!Natives[u];
}

exports(isNativeTag).as('/Framework/V1.0/TypeChecks/isNativeTag');
