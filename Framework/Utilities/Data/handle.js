import isData from 'Framework/TypeChecks/isData';
import DataHandle from 'Framework/Classes/DataHandle';

function handle(data) {
	if (!isData(data)) { return; }
	return new DataHandle(data);
}