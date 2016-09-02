import uncapitalize from '/Framework/Utilities/Strings/uncapitalize';
import vendors from '/Framework/Constants/CSS/vendors';

//not a real constant, since it is generated
var equivalents = {};
var example = document.createElement('div');
for (var key in example.style) {
	try{
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
	} catch (e) {}
}
var element = null;

export default equivalents;