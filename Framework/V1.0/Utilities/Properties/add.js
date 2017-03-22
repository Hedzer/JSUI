
//Classes
import StateChangeReceipt from '/Framework/V1.0/Classes/Receipts/StateChange';

//Constants
import $private from '/Framework/V1.0/Constants/Keys/General/private';
import $trigger from '/Framework/V1.0/Constants/Keys/General/trigger';
import trigger from '/Framework/V1.0/Constants/Keys/Eventful/trigger';

//Utilities
import exports from '/Framework/V1.0/Utilities/Dependencies/exports';

export default function add(host, name, defaults){
	Object.defineProperty(host, name, {
		get:function(){
			let value = (name in this[$private].state ? this[$private].state[name] : defaults);
			return value;
		},
		set:function(v){
			let value = (name in this[$private].state ? this[$private].state[name] : defaults);
			let old = value;
			value = v;
			if (old !== v){
				this[$private].state[name] = value;
				let data = new StateChangeReceipt({
					owner: this,
					property: name,
					old: old,
					new: value,
				});
				let trigger = (this.trigger || this[$trigger] || this[trigger]).bind(this);
				if (trigger){
					trigger([`${name}Changed`, 'Changed'], data);
				}
			}
		},
		configurable:true,
		enumerable:true,
	});
}

exports(add).as('/Framework/V1.0/Utilities/Properties/add');
