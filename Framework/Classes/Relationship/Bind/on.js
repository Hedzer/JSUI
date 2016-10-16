import normalize from 'Framework/Classes/Relationship/Bind/normalize';

export default function on(binding, events) {
	return {
		normalize: normalize.bind(this, binding)
	}
}