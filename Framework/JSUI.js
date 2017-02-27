import Mixins from '/Framework/V1.0/JSUI/Mixins';
import TypeChecks from '/Framework/V1.0/JSUI/TypeChecks';
import Classes from '/Framework/V1.0/JSUI/Classes';
import Constants from '/Framework/V1.0/JSUI/Constants';
import Singletons from '/Framework/V1.0/JSUI/Singletons';
import Utilities from '/Framework/V1.0/JSUI/Utilities';
import Sorts from '/Framework/V1.0/JSUI/Sorts';
import Reflection from '/Framework/V1.0/JSUI/Reflection';
import Elements from '/Framework/V1.0/Classes/Elements';
import Settings from '/Framework/V1.0/Constants/JSUI/settings';
import Router from '/Framework/V1.0/Singletons/Navigation/Router';

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
	Mixins: Mixins,
	Classes: Classes,
	Constants: Constants,
	Singletons: Singletons,
	TypeChecks: TypeChecks,
	Utilities: Utilities,
	Sorts: Sorts,
	Reflection: Reflection,
	Router: Router
};

window.JSUI = JSUI;

export default JSUI;