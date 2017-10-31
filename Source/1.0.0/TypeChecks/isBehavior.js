

//Classes
import Behavior from 'JSUI/Source/1.0.0/Classes/Core/Behavior';

//Utilities
import exports from 'Parcello/exports';

export default function isBehavior(u) {
	return (u instanceof Behavior);
}

exports(isBehavior).as('JSUI/Source/1.0.0/TypeChecks/isBehavior');

