import isData from '/Framework/V1.0/TypeChecks/isData';
import DataHandle from '/Framework/V1.0/Classes/DataHandle';

export default function handle(data) {
	if (!isData(data)) { return; }
	return new DataHandle(data);
}