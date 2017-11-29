
//Classes
import Distinct from 'JSUI/Source/1.0.0/Classes/Core/Distinct';
import Identity from 'JSUI/Source/1.0.0/Classes/Core/Identity';
import StateChangeReceipt from 'JSUI/Source/1.0.0/Classes/Receipts/StateChange';

//Constants
import $private from 'JSUI/Source/1.0.0/Constants/Keys/General/private';
import equivalents from 'JSUI/Source/1.0.0/Constants/CSS/equivalents';
import vendors from 'JSUI/Source/1.0.0/Constants/CSS/vendors';

//Singletons
import Variables from 'JSUI/Source/1.0.0/Singletons/Style/Variables';

//TypeChecks
import isNull from 'JSUI/Source/1.0.0/TypeChecks/isNull';
import isString from 'JSUI/Source/1.0.0/TypeChecks/isString';
import isFunction from 'JSUI/Source/1.0.0/TypeChecks/isFunction';

//Utilities
import exports from 'Parcello/exports';
import getFunctionVariables from 'JSUI/Source/1.0.0/Utilities/Templating/getFunctionVariables';
import getVariables from 'JSUI/Source/1.0.0/Utilities/Templating/getVariables';
import symbolish from 'JSUI/Source/1.0.0/Utilities/Properties/symbolish';

const identity = new Identity({
	class: 'StyleRules',
	major: 1, minor: 0, patch: 0,
});

class StyleRules extends Distinct {
	constructor() {
		super();
		this[$private].styles = {};
		this.identity = identity;
	}
}

//add all the style keys as properties
Object.keys(equivalents).forEach((key) => {
	let hasVariables = false;
	Object.defineProperty(StyleRules.prototype, key, {
		get:function(){
			let value = this[$private].styles[key];
			if (!hasVariables) {
				return value;
			}
			return Variables.parse(value);
		},
		set:function(value){
			let old = this[$private].styles[key];

			if (isString(value)) {
				let vars = getVariables(value);
				hasVariables = !!vars.length;
			}

			if (isFunction(value)) {
				let vars = getFunctionVariables(value);
				hasVariables = !!vars.length;
			}

			this[$private].styles[key] = value;
			if (isNull(value)) {
				delete this[$private].styles[key];
			}
			if (old !== value){
				let data = new StateChangeReceipt({
					owner:this,
					property:key,
					old:old,
					new:value,
				});
				if (this.trigger){
					this.trigger([`${key}Changed`, 'styleChanged'], data);
				}
			}

		},
		configurable:true,
		enumerable:true,
	});
});

export default StyleRules;

exports(StyleRules).as('JSUI/Source/1.0.0/Classes/Style/Rules');
