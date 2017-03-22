
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function replaceAll(text, replace, replacement){
	return text.split(replace).join(replacement);
};

exports(replaceAll).as('/Framework/V1.0/Utilities/Strings/replaceAll');
