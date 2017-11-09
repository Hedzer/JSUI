
//entries
import Mixins from 'JSUI/Source/1.0.0/Entry/Mixins';
import TypeChecks from 'JSUI/Source/1.0.0/Entry/TypeChecks';
import Classes from 'JSUI/Source/1.0.0/Entry/Classes';
import Constants from 'JSUI/Source/1.0.0/Entry/Constants';
import Singletons from 'JSUI/Source/1.0.0/Entry/Singletons';
import Utilities from 'JSUI/Source/1.0.0/Entry/Utilities';
import Sorts from 'JSUI/Source/1.0.0/Entry/Sorts';
import Reflection from 'JSUI/Source/1.0.0/Entry/Reflection';
import Elements from 'JSUI/Source/1.0.0/Classes/Elements';
import Settings from 'JSUI/Source/1.0.0/Constants/settings';
import Router from 'JSUI/Source/1.0.0/Singletons/Navigation/Router';

//Utilities
import exports from 'Parcello/exports';

let API = {
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

export default API;

exports(API).as('JSUI');
