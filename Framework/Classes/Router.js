import Base from 'Framework/Classes/Base';
import Privatelike from 'Framework/Mixins/Privatelike';
import Enableable from 'Framework/Mixins/Enableable';

export default class Router extends Enableable(Privatelike(Base)) {
	add(route) {}
	remove(route) {}
}