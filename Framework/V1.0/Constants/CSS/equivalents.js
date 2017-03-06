import uncapitalize from '/Framework/V1.0/Utilities/Strings/uncapitalize';
import vendors from '/Framework/V1.0/Constants/CSS/vendors';

//not a real constant, since it is generated
let equivalents = {};
let example = document.createElement('div');
for (let key in example.style) {
	try{
		example.style[key] = 'inherit';
		let name = (example.getAttribute('style') || '').split(':')[0];
		equivalents[key] = name;
		example.setAttribute('style', '');
		vendors.forEach((vendor) => {
			let prefix = '-'+vendor+'-';
			if (name.includes(prefix)){
				let w3cKey = key;
				w3cKey = uncapitalize(w3cKey.replace(vendor, ''));
				equivalents[w3cKey] = name;
				equivalents[name.replace(prefix,'')] = name;
			}
		});
	} catch (e) {}
}
let element = null;

export default equivalents;