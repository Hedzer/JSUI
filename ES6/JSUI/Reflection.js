import feval from '../Reflection/feval';
import { default as classCreate } from '../Reflection/Class/create';
import { default as dataCreate } from '../Reflection/Data/create';
import parse from '../Reflection/XML/parse';

var Reflection = {
	Class: {
		create: classCreate
	},
	XML: {
		parse: parse
	},
	Data: {
		create: dataCreate
	},
	feval: feval
};

export default Reflection;