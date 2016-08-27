import { default as removeEvents } from '../../../../Utilities/Events/remove';
import { default as removeAllEvents } from '../../../../Utilities/Events/removeAll';
import { default as on } from '../../../../Utilities/Events/on';
import isFunction from '../../../../TypeChecks/isFunction';
import isElement from '../../../../TypeChecks/isElement';
import uid from '../../../../Utilities/General/uid';

export default function _string(name, method) {
	return on.call(this, name, method);
}