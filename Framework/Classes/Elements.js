import tags from '/Framework/Constants/HTML/tags';
import create from '/Framework/Reflection/Class/create';

var Elements = {};
tags.forEach((tag) => {
	Elements[tag] = create(tag, tag);
});

export default Elements;