import Feature from '/Framework/V1.0/Classes/Core/Feature';
import TypeChecks from '/Framework/V1.0/JSUI/TypeChecks';

function isFeature(u) {
	return (u instanceof Feature);
}

//registering manually to solve cyclic dependencies
TypeChecks.isFeature = isFeature;

export default isFeature;