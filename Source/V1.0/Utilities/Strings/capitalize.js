
//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function capitalize(text){
	return text.charAt(0).toUpperCase() + text.slice(1);
};

exports(capitalize).as('/JSUI/Source/V1.0/Utilities/Strings/capitalize');
