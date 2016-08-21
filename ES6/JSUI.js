import Polyfills from './JSUI/Polyfills';
import Classes from './JSUI/Classes';
import Constants from './JSUI/Constants';
import Singletons from './JSUI/Singletons';
import TypeChecks from './JSUI/TypeChecks';
import Utilities from './JSUI/Utilities';
import Sorts from './JSUI/Sorts';
import Reflection from './JSUI/Reflection';
import Elements from './Classes/Elements';

var JSUI = {
	Behavior: Classes.Behavior,
	Element: Classes.Element,
	Elements: Elements,
	Style: {
		Sheet: Classes.StyleSheet,
		Rule: Classes.StyleSheetRule,
		Inline: Classes.StyleInline,
		Sheets: Singletons.Style.Sheets
	},
	Classes: Classes,
	Constants: Constants,
	Singletons: Singletons,
	TypeChecks: TypeChecks,
	Utilities: Utilities,
	Sorts: Sorts,
	Reflection: Reflection,
	Polyfilled: Polyfills
};

window.JSUI = JSUI;
export default JSUI;