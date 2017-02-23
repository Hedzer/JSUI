import Page from '/Framework/V1.0/Classes/Core/Page';
import TypeChecks from '/Framework/V1.0/JSUI/TypeChecks';

function isPage(u) {
	return (u instanceof Page);
}

//registering manually to solve cyclic dependencies
TypeChecks.isPage = isPage;

export default isPage;