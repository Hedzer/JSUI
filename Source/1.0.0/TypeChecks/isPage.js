
//Classes
import Page from 'JSUI/Source/1.0.0/Classes/Core/Page';

//Utilities
import exports from 'Parcello/exports';

function isPage(u) {
	return (u instanceof Page);
}

export default isPage;

exports(isPage).as('JSUI/Source/1.0.0/TypeChecks/isPage');
