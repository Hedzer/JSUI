
//Classes
import JSUIFunction from '/JSUI/Source/1.0.0/Classes/Core/Function';

//Utilities
import exports from '/Parcello/exports';

export default function isJSUIFunction(u) {
	return (u instanceof JSUIFunction);
}

exports(isJSUIFunction).as('/JSUI/Source/1.0.0/TypeChecks/isJSUIFunction');
