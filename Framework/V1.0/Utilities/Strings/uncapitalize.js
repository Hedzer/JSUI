
//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

function uncapitalize(text){
	return text.charAt(0).toLowerCase() + text.slice(1);
}

export default uncapitalize;

exports(uncapitalize).as('/Framework/V1.0/Utilities/Strings/uncapitalize');
