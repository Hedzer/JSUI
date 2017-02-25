import $private from '/Framework/V1.0/Constants/Keys/General/private';
import Identity from '/Framework/V1.0/Classes/Core/Identity';
import Distinct from '/Framework/V1.0/Classes/Core/Distinct';
import isJSUI from '/Framework/V1.0/TypeChecks/isJSUI';
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import Behaviorlike from '/Framework/V1.0/Mixins/Behaviorlike';

const identity = new Identity({
	class: 'Behavior',
	major: 1, minor: 0, patch: 0
});

export default class Behavior extends Behaviorlike(Distinct) {
	constructor(host) {
		super();

		//setup new props
		this.identity = identity;
	}
}