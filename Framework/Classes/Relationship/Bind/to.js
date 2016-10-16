import on from 'Framework/Classes/Relationship/Bind/on';
import oneWay from 'Framework/Classes/Relationship/Bind/oneWay';
import twoWay from 'Framework/Classes/Relationship/Bind/twoWay';

export default function to(binding, bindTo) {
	binding.boundTo = bindTo;
	return {
		on: on.bind(this, binding),
		oneWay: oneWay.bind(this, binding),
		twoWay: twoWay.bind(this, binding)
	}
}