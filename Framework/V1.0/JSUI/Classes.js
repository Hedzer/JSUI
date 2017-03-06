import Behavior from '/Framework/V1.0/Classes/Core/Behavior';
import Collection from '/Framework/V1.0/Classes/Core/Collection';
import Distinct from '/Framework/V1.0/Classes/Core/Distinct';
import Element from '/Framework/V1.0/Classes/Core/Element';
import ElementCollection from '/Framework/V1.0/Classes/Collections/Element';
import Elements from '/Framework/V1.0/Classes/Elements';
import Extensible from '/Framework/V1.0/Classes/Core/Extensible';
import JSUIError from '/Framework/V1.0/Classes/Core/Error';
import Styleable from '/Framework/V1.0/Classes/Core/Styleable';
import StyleInline from '/Framework/V1.0/Classes/Style/Inline';
import StyleRules from '/Framework/V1.0/Classes/Style/Rules';
import StyleSheet from '/Framework/V1.0/Classes/Style/Sheet';
import StyleSheetRule from '/Framework/V1.0/Classes/Style/SheetRule';
import StyleVariables from '/Framework/V1.0/Classes/Style/Variables';
import Receipt from '/Framework/V1.0/Classes/Core/Receipt';
import ElementReceipt from '/Framework/V1.0/Classes/Receipts/Element';
import ElementClassReceipt from '/Framework/V1.0/Classes/Receipts/ElementClass';
import Data from '/Framework/V1.0/Classes/Core/Data';
import Identity from '/Framework/V1.0/Classes/Core/Identity';
import JSUIFunction from '/Framework/V1.0/Classes/Core/Function';
import Relationship from '/Framework/V1.0/Classes/Core/Relationship';
import BindReceipt from '/Framework/V1.0/Classes/Receipts/Bind';
import Application from '/Framework/V1.0/Classes/Core/Application';
import Role from '/Framework/V1.0/Classes/Core/Role';
import Feature from '/Framework/V1.0/Classes/Core/Feature';
import Page from '/Framework/V1.0/Classes/Core/Page';
import Router from '/Framework/V1.0/Classes/Core/Router';
import Endpoint from '/Framework/V1.0/Classes/Core/Endpoint';
import Navigation from '/Framework/V1.0/Classes/Core/Navigation';

let Classes = {
	Behavior: Behavior,
	Collection: Collection,
	Distinct: Distinct,
	Receipt: Receipt,
	ElementReceipt: ElementReceipt,
	ElementClassReceipt: ElementClassReceipt,
	Element: Element,
	ElementCollection: ElementCollection,
	Extensible: Extensible,
	JSUIError: JSUIError,
	Styleable: Styleable,
	StyleInline: StyleInline,
	StyleRules: StyleRules,
	StyleSheet: StyleSheet,
	StyleSheetRule: StyleSheetRule,
	StyleVariables: StyleVariables,
	Data: Data,
	Identity: Identity,
	Function: JSUIFunction,
	Relationship: Relationship,
	BindReceipt: BindReceipt,
	Application: Application,
	Role: Role,
	Feature: Feature,
	Page: Page,
	Router: Router,
	Endpoint: Endpoint,
	Navigation: Navigation
};

export default Classes;