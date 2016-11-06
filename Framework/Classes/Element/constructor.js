import { default as addProperty } from 'Framework/Utilities/Properties/add';
import getHandledType from 'Framework/Classes/Element/getHandledType';
import settings from 'Framework/Constants/JSUI/settings';
import handler from 'Framework/Classes/Element/Handlers/Constructor';

export default function constructor(tag) {
	//select the proper constructor action
	let type = getHandledType(tag);
	let action = handler[type];
	tag = (action || function(){
		return handler.string.call(this, 'div');
	}).call(this, tag);

	//set up ids
	this.element.uid = this.uid;

	//add references 
	let development = settings.Development;
	if (development.enabled && development.references) {
		this.element.JSUI = this;
	}

	return this;
}