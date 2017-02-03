import tags from '/Framework/V1.0/Constants/HTML/tags';

let Natives = {};
tags.forEach((tag) => {
	Natives[tag] = true;
});

export default function isNativeTag(u) {
	return !!Natives[u];
}