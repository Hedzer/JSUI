import Classes from './JSUI/Classes';
import Constants from './JSUI/Constants';
import Singletons from './JSUI/Singletons';
import TypeChecks from './JSUI/TypeChecks';
import Utilities from './JSUI/Utilities';
import Sorts from './JSUI/Sorts';
import Reflection from './JSUI/Reflection';
import Elements from './Classes/Elements';
import Data from './JSUI/Data';
import Settings from './Constants/JSUI/settings';

var JSUI = {
	Settings: Settings,
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
	Data: Data
};

window.JSUI = JSUI;