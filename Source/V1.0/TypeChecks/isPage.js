
//Classes
import Page from '/JSUI/Source/V1.0/Classes/Core/Page';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

function isPage(u) {
	return (u instanceof Page);
}

export default isPage;

exports(isPage).as('/JSUI/Source/V1.0/TypeChecks/isPage');
