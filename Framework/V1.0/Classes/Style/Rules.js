
//Classes
import Distinct from '/Framework/V1.0/Classes/Core/Distinct';
import Identity from '/Framework/V1.0/Classes/Core/Identity';
import StateChangeReceipt from '/Framework/V1.0/Classes/Receipts/StateChange';

//Constants
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import equivalents from '/Framework/V1.0/Constants/CSS/equivalents';
import vendors from '/Framework/V1.0/Constants/CSS/vendors';

//TypeChecks
import isNull from '/Framework/V1.0/TypeChecks/isNull';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

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
	Object.defineProperty(StyleRules.prototype, key, {
		get:function(){
			return this[$private].styles[key];
		},
		set:function(value){
			let old = this[$private].styles[key];
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

exports(StyleRules).as('/Framework/V1.0/Classes/Styles/Rules');
