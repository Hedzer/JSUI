import isData from 'Framework/TypeChecks/isData';
import DataHandle from 'Framework/Classes/DataHandle';

export default function handle(data) {
	if (!isData(data)) { return; }
	return new DataHandle(data);
}