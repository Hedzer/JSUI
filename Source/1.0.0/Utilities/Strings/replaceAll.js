
//Utilities
import exports from 'Parcello/exports';

export default function replaceAll(text, replace, replacement){
	return text.split(replace).join(replacement);
};

exports(replaceAll).as('JSUI/Source/1.0.0/Utilities/Strings/replaceAll');
