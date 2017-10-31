
//Utilities
import exports from 'Parcello/exports';

function uncapitalize(text){
	return text.charAt(0).toLowerCase() + text.slice(1);
}

export default uncapitalize;

exports(uncapitalize).as('JSUI/Source/1.0.0/Utilities/Strings/uncapitalize');
