
//Utilities
import addHiddenValue from '/JSUI/Source/V1.0/Utilities/Properties/addHiddenValue';
import exports from '/JSUI/Source/V1.0/Utilities/Dependencies/exports';

const namespace = 'JSUI.Style.Sheets';

if (!(namespace in window)) {
	addHiddenValue(window, namespace, {});
}
const Sheets = window[namespace];

export default Sheets;

exports(Sheets).as('/JSUI/Source/V1.0/Singletons/Style/Sheets');