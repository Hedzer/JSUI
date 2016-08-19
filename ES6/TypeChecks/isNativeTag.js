import tags from '../Constants/HTML/tags';

var Natives = {};
tags.forEach((tag) => {
	Natives[tag] = true;
});

export function isNativeTag(u) {
	return Natives[u];
}