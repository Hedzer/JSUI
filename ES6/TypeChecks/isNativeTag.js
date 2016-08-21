import tags from '../Constants/HTML/tags';

var Natives = {};
tags.forEach((tag) => {
	Natives[tag] = true;
});

export default function isNativeTag(u) {
	return Natives[u];
}