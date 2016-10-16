import to from 'Framework/Classes/Relationship/Bind/to';

export default function bind(binding, subject) {

	binding.subject = subject;

	return {to: to.bind(this, binding)};
}