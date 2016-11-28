//Keys
import $private from 'Framework/Constants/Keys/General/private';

let Routable = (descendant) => class RoutableMixin extends descendant {  
	static get route() {}
	static set route(name) {}
};

export default Routable;