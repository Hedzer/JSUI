import extensible_constructor from 'Framework/Classes/Extensible/constructor';
import distinct_constructor from 'Framework/Classes/Distinct/constructor';
import styleable_constructor from 'Framework/Classes/Styleable/constructor';
import element_constructor from 'Framework/Classes/Element/constructor';
export default function constructor() {
	extensible_constructor.apply(this, arguments);
	distinct_constructor.apply(this, arguments);
	styleable_constructor.apply(this, arguments);
	element_constructor.apply(this, arguments);
}