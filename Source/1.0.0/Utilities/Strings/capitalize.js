
//Utilities
import exports from 'Parcello/exports';

export default function capitalize(text){
	return text.charAt(0).toUpperCase() + text.slice(1);
};

exports(capitalize).as('JSUI/Source/1.0.0/Utilities/Strings/capitalize');
