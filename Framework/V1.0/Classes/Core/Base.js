export default class Base {
	instantiate() {
		return this;
	}
	static instantiate() {
		return new this();
	}
}