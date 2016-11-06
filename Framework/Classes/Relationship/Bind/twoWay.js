import normalize from 'Framework/Classes/Relationship/Bind/normalize';

export default function twoWay(binding, events) {
	return {
		normalize: normalize.bind(this, binding)
	}
}