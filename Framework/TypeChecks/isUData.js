import Data from 'Framework/Classes/Data';

export default function isUStyleRule(u) {
	return !!(u && u.prototype  && (u.prototype instanceof Data || u === Data));
}