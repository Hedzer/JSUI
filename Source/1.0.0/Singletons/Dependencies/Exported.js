
//Utilities
import addHiddenValue from '/JSUI/Source/1.0.0/Utilities/Properties/addHiddenValue';

const namespace = 'JSUI.Style.Exported';

if (!(namespace in window)) {
	addHiddenValue(window, namespace, {});
}
const Exported = window[namespace];

export default Exported;
