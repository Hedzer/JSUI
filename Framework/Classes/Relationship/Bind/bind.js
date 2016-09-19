import to from 'Framework/Classes/Relationship/Bind/to';

export default function bind(state, subject) {
	return {to: to.bind(this, state)};
}