import feval from 'Framework/Reflection/feval';
import { default as classCreate } from 'Framework/Reflection/Class/create';
import { default as dataCreate } from 'Framework/Reflection/Data/create';
import parse from 'Framework/Reflection/XML/parse';

let Reflection = {
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