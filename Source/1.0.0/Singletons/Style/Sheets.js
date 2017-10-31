
//Utilities
import addHiddenValue from 'JSUI/Source/1.0.0/Utilities/Properties/addHiddenValue';
import exports from 'Parcello/exports';

const namespace = 'JSUI.Style.Sheets';

if (!(namespace in window)) {
	addHiddenValue(window, namespace, {});
}
const Sheets = window[namespace];

export default Sheets;

exports(Sheets).as('JSUI/Source/1.0.0/Singletons/Style/Sheets');