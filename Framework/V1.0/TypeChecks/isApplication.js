import Application from '/Framework/V1.0/Classes/Core/Application';
import TypeChecks from '/Framework/V1.0/JSUI/TypeChecks';

function isApplication(u) {
	return (u instanceof Application);
}

//registering manually to solve cyclic dependencies
TypeChecks.isApplication = isApplication;

export default isApplication;