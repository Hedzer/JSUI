import setter from './setter';

export default function set(obj, path, value) {
	return setter(obj, path, value);
}