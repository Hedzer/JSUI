import tags from '../Constants/HTML/tags';
import create from '../Reflection/Class/create';

var Elements = {};
tags.forEach((tag) => {
	Elements[tag] = create(tag, tag);
});

export default Elements;