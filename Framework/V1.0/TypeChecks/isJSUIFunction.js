
//Classes
import JSUIFunction from '/Framework/V1.0/Classes/Core/Function';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function isJSUIFunction(u) {
	return (u instanceof JSUIFunction);
}

exports(isJSUIFunction).as('/Framework/V1.0/TypeChecks/isJSUIFunction');
