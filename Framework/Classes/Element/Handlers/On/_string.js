import on from 'Framework/Utilities/Events/on';

export default function _string(name, method) {
	return on.call(this, name, method);
}