import $private from '/Framework/V1.0/Constants/Keys/General/private';

export default function _undefined() {
	if (this[$private].text) {
		return this[$private].text.nodeValue;
	}
}