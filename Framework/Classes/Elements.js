import tags from 'Framework/Constants/HTML/tags';
import create from 'Framework/Reflection/Class/create';
import capitalize from 'Framework/Utilities/Strings/capitalize'

var Elements = {};
tags.forEach((tag) => {
	var name = capitalize(tag);
	try {
		Elements[name] = create(name, tag);
	} catch(e) {
		Elements[name] = create(tag, tag);
	}
});

export default Elements;