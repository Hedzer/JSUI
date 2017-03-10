
//Classes
import Application from '/Framework/V1.0/Classes/Core/Application';
import Behavior from '/Framework/V1.0/Classes/Core/Behavior';
import BindReceipt from '/Framework/V1.0/Classes/Receipts/Bind';
import Collection from '/Framework/V1.0/Classes/Core/Collection';
import Data from '/Framework/V1.0/Classes/Core/Data';
import Distinct from '/Framework/V1.0/Classes/Core/Distinct';
import Element from '/Framework/V1.0/Classes/Core/Element';
import ElementClassReceipt from '/Framework/V1.0/Classes/Receipts/ElementClass';
import ElementCollection from '/Framework/V1.0/Classes/Collections/Element';
import ElementReceipt from '/Framework/V1.0/Classes/Receipts/Element';
import Elements from '/Framework/V1.0/Classes/Elements';
import Endpoint from '/Framework/V1.0/Classes/Core/Endpoint';
import Extensible from '/Framework/V1.0/Classes/Core/Extensible';
import Feature from '/Framework/V1.0/Classes/Core/Feature';
import Identity from '/Framework/V1.0/Classes/Core/Identity';
import JSUIError from '/Framework/V1.0/Classes/Core/Error';
import JSUIFunction from '/Framework/V1.0/Classes/Core/Function';
import Navigation from '/Framework/V1.0/Classes/Core/Navigation';
import Page from '/Framework/V1.0/Classes/Core/Page';
import Receipt from '/Framework/V1.0/Classes/Core/Receipt';
import Relationship from '/Framework/V1.0/Classes/Core/Relationship';
import Role from '/Framework/V1.0/Classes/Core/Role';
import Router from '/Framework/V1.0/Classes/Core/Router';
import Styleable from '/Framework/V1.0/Classes/Core/Styleable';
import StyleInline from '/Framework/V1.0/Classes/Style/Inline';
import StyleRules from '/Framework/V1.0/Classes/Style/Rules';
import StyleSheet from '/Framework/V1.0/Classes/Style/Sheet';
import StyleSheetRule from '/Framework/V1.0/Classes/Style/SheetRule';
import StyleVariables from '/Framework/V1.0/Classes/Style/Variables';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

let Classes = {
	Application: Application,
	Behavior: Behavior,
	BindReceipt: BindReceipt,
	Collection: Collection,
	Data: Data,
	Distinct: Distinct,
	Element: Element,
	ElementClassReceipt: ElementClassReceipt,
	ElementCollection: ElementCollection,
	ElementReceipt: ElementReceipt,
	Endpoint: Endpoint,
	Extensible: Extensible,
	Feature: Feature,
	Function: JSUIFunction,
	Identity: Identity,
	JSUIError: JSUIError,
	Navigation: Navigation,
	Page: Page,
	Receipt: Receipt,
	Relationship: Relationship,
	Role: Role,
	Router: Router,
	Styleable: Styleable,
	StyleInline: StyleInline,
	StyleRules: StyleRules,
	StyleSheet: StyleSheet,
	StyleSheetRule: StyleSheetRule,
	StyleVariables: StyleVariables,
};

export default Classes;

exports(Classes).as('/Framework/V1.0/JSUI/Classes');
