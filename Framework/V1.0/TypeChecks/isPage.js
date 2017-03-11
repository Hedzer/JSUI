
//Classes
import Page from '/Framework/V1.0/Classes/Core/Page';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

function isPage(u) {
	return (u instanceof Page);
}

export default isPage;

exports(isPage).as('/Framework/V1.0/TypeChecks/isPage');
