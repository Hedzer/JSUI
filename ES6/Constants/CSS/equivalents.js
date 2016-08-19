import uncapitalize from '../../Utilities/Strings/uncapitalize';
import vendors from './vendors';

//not a real constant, since it is generated
var equivalents = {};
var example = document.createElement('div');
Object.getOwnPropertyNames(example.style).forEach((key) => {
	example.style[key] = 'inherit';
	var name = (example.getAttribute('style') || '').split(':')[0];
	equivalents[key] = name;
	example.setAttribute('style', '');
	vendors.forEach((vendor) => {
		var prefix = '-'+vendor+'-';
		if (~name.indexOf(prefix)){
			var w3cKey = key;
			w3cKey = uncapitalize(w3cKey.replace(vendor, ''));
			equivalents[w3cKey] = name;
			equivalents[name.replace(prefix,'')] = name;
		}
	});
});
var element = null;

export default equivalents;