
//Utilities
import addHiddenValue from '/Framework/V1.0/Utilities/Properties/addHiddenValue';
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

const namespace = 'JSUI.Style.Sheets';

if (!(namespace in window)) {
	addHiddenValue(window, namespace, {});
}
const Sheets = window[namespace];

export default Sheets;

exports(Sheets).as('/Framework/V1.0/Singletons/Style/Sheets');