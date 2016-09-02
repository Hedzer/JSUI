import normalize from '/Framework/Classes/Relationship/Bind/normalize';

export default function on(state, events) {
	return {
		normalize: normalize.bind(this, state)
	}
}