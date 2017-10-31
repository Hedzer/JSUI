
//Classes
import Page from 'JSUI/Source/1.0.0/Classes/Core/Page';

//Utilities
import exports from 'Parcello/exports';
import isUOfType from 'JSUI/Source/1.0.0/Utilities/TypeChecks/isUOfType';

export default function isUPage(u) {
	return isUOfType(u, Page);
}

exports(isUPage).as('JSUI/Source/1.0.0/TypeChecks/isUPage');
