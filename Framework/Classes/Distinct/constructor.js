import $private from 'Framework/Constants/Symbols/General/private';
import uid from 'Framework/Utilities/General/uid';

export default function constructor() {
	this[$private].uid = uid();
	this[$private].Is = {};
}