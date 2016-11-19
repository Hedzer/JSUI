var JSUI = (function (TypeChecks,Classes,Constants,Singletons,Utilities,Sorts,Reflection,Elements,Data,Settings) {
'use strict';

TypeChecks = 'default' in TypeChecks ? TypeChecks['default'] : TypeChecks;
Classes = 'default' in Classes ? Classes['default'] : Classes;
Constants = 'default' in Constants ? Constants['default'] : Constants;
Singletons = 'default' in Singletons ? Singletons['default'] : Singletons;
Utilities = 'default' in Utilities ? Utilities['default'] : Utilities;
Sorts = 'default' in Sorts ? Sorts['default'] : Sorts;
Reflection = 'default' in Reflection ? Reflection['default'] : Reflection;
Elements = 'default' in Elements ? Elements['default'] : Elements;
Data = 'default' in Data ? Data['default'] : Data;
Settings = 'default' in Settings ? Settings['default'] : Settings;

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

return JSUI;

}(TypeChecks,Classes,Constants,Singletons,Utilities,Sorts,Reflection,Elements,Data,Settings));

//# sourceMappingURL=JSUI.ES6.js.map
