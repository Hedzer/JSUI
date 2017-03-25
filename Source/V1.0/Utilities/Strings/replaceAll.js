
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function replaceAll(text, replace, replacement){
	return text.split(replace).join(replacement);
};

exports(replaceAll).as('/JSUI/Source/V1.0/Utilities/Strings/replaceAll');
