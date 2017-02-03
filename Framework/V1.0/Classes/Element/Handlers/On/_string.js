import on from '/Framework/V1.0/Utilities/Events/on';

export default function _string(name, method) {
	return on.call(this, name, method);
}