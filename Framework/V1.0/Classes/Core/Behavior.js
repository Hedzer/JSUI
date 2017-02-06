import $private from '/Framework/V1.0/Constants/Keys/General/private';
import Identity from '/Framework/V1.0/Classes/Core/Identity';
import Styleable from '/Framework/V1.0/Classes/Core/Styleable';
import isJSUI from '/Framework/V1.0/TypeChecks/isJSUI';
import isFunction from '/Framework/V1.0/TypeChecks/isFunction';
import Behaviorlike from '/Framework/V1.0/Mixins/Behaviorlike';

const identity = new Identity({
	class: 'Behavior',
	major: 1, minor: 0, patch: 0
});

export default class Behavior extends Behaviorlike(Styleable) {
	constructor(host) {
		super();

		//setup new props
		this.identity = identity;
		this.Style.context = 'behavior';
	}
}