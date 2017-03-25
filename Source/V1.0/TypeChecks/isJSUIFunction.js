
//Classes
import JSUIFunction from '/JSUI/Source/V1.0/Classes/Core/Function';

//Utilities
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

export default function isJSUIFunction(u) {
	return (u instanceof JSUIFunction);
}

exports(isJSUIFunction).as('/JSUI/Source/V1.0/TypeChecks/isJSUIFunction');
