import on from 'Framework/Classes/Relationship/Bind/on';
import oneWay from 'Framework/Classes/Relationship/Bind/oneWay';
import twoWay from 'Framework/Classes/Relationship/Bind/twoWay';

export default function to(state, bindTo) {
	return {
		on: on.bind(this, state),
		oneWay: oneWay.bind(this, state),
		twoWay: twoWay.bind(this, state)
	}
}