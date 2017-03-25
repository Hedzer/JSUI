import Mixins from '/JSUI/Source/V1.0/JSUI/Mixins';
import TypeChecks from '/JSUI/Source/V1.0/JSUI/TypeChecks';
import Classes from '/JSUI/Source/V1.0/JSUI/Classes';
import Constants from '/JSUI/Source/V1.0/JSUI/Constants';
import Singletons from '/JSUI/Source/V1.0/JSUI/Singletons';
import Utilities from '/JSUI/Source/V1.0/JSUI/Utilities';
import Sorts from '/JSUI/Source/V1.0/JSUI/Sorts';
import Reflection from '/JSUI/Source/V1.0/JSUI/Reflection';
import Elements from '/JSUI/Source/V1.0/Classes/Elements';
import Settings from '/JSUI/Source/V1.0/Constants/JSUI/settings';
import Router from '/JSUI/Source/V1.0/Singletons/Navigation/Router';

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
		Sheets: Singletons.Style.Sheets,
		Variables: Singletons.Style.Variables,
		Values: Classes.StyleValues,
	},
	Mixins: Mixins,
	Classes: Classes,
	Constants: Constants,
	Singletons: Singletons,
	TypeChecks: TypeChecks,
	Utilities: Utilities,
	Sorts: Sorts,
	Reflection: Reflection,
	Router: Router,
};

window.JSUI = JSUI;

export default JSUI;