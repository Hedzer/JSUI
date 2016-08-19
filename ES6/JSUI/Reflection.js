import feval from '../Reflection/feval';
import create from '../Reflection/Class/create';
import parse from '../Reflection/XML/parse';

var Reflection = {
	Class: {
		create: create
	},
	XML: {
		parse: parse
	},
	feval: feval
};

export default Reflection;