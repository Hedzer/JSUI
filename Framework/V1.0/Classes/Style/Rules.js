import $private from '/Framework/V1.0/Constants/Keys/General/private';
import Identity from '/Framework/V1.0/Classes/Core/Identity';
import isNull from '/Framework/V1.0/TypeChecks/isNull';
import vendors from '/Framework/V1.0/Constants/CSS/vendors';
import equivalents from '/Framework/V1.0/Constants/CSS/equivalents';
import Distinct from '/Framework/V1.0/Classes/Core/Distinct';
import StateChangeReceipt from '/Framework/V1.0/Classes/Receipts/StateChange';

const identity = new Identity({
	class: 'StyleRules',
	major: 1, minor: 0, patch: 0
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
					new:value
				});
				if (this.trigger){
					this.trigger(`${key}Changed`, data);
					this.trigger('styleChanged', data);
				}
			}

		},
		configurable:true,
		enumerable:true
	});
});

export default StyleRules;