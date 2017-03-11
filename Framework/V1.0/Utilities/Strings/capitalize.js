
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function capitalize(text){
	return text.charAt(0).toUpperCase() + text.slice(1);
};

exports(capitalize).as('/Framework/V1.0/Utilities/Strings/capitalize');
