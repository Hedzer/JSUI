import setter from './setter';

export function set(obj, path, value) {
	return setter(obj, path, value);
}