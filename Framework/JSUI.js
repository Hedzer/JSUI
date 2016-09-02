import Classes from '/Framework/JSUI/Classes';
import Constants from '/Framework/JSUI/Constants';
import Singletons from '/Framework/JSUI/Singletons';
import TypeChecks from '/Framework/JSUI/TypeChecks';
import Utilities from '/Framework/JSUI/Utilities';
import Sorts from '/Framework/JSUI/Sorts';
import Reflection from '/Framework/JSUI/Reflection';
import Elements from '/Framework/Classes/Elements';
import Data from '/Framework/JSUI/Data';
import Settings from '/Framework/Constants/JSUI/settings';

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