import Data from 'Framework/Classes/Data';

export default function isUData(u) {
	return !!(u && u.prototype  && (u.prototype instanceof Data || u === Data));
}