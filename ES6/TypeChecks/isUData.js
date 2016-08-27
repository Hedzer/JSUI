import Data from '../Classes/Data';

export default function isUStyleRule(u) {
	return (u.prototype instanceof Data);
}