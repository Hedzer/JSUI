import normalize from 'Framework/Classes/Relationship/Bind/normalize';

export default function oneWay(binding, events) {
	return {
		normalize: normalize.bind(this, binding)
	}
}