import $private from '/Framework/V1.0/Constants/Keys/General/private';
import uid from '/Framework/V1.0/Utilities/General/uid';

export default function constructor() {
	this[$private].uid = uid();
	this[$private].Is = {};
}