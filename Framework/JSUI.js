import TypeChecks from 'Framework/JSUI/TypeChecks';
import Classes from 'Framework/JSUI/Classes';
import Constants from 'Framework/JSUI/Constants';
import Singletons from 'Framework/JSUI/Singletons';
import Utilities from 'Framework/JSUI/Utilities';
import Sorts from 'Framework/JSUI/Sorts';
import Reflection from 'Framework/JSUI/Reflection';
import Elements from 'Framework/Classes/Elements';
import Data from 'Framework/JSUI/Data';
import Settings from 'Framework/Constants/JSUI/settings';

let JSUI = {
	Settings: Settings,
	Behavior: Classes.Behavior,
	Element: Classes.Element,
	Identity: Classes.Identity,
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

export default JSUI;