import { default as addProperty } from '../../Utilities/Properties/add';
import addClass from '../../Utilities/Elements/addClass';
import getHandledType from './getHandledType';
import settings from '../../Constants/JSUI/settings';
import StyleInline from '../StyleInline';
import handler from './Handlers/Constructor';

export default function constructor(tag) {
	//select the proper constructor action
	var type = getHandledType(tag);
	var action = handler[type];
	tag = (action || function(){
		return handler.string.call(this, 'div');
	}).call(this, tag);

	//set up ids
	this.element.uid = this.uid;

	//add references 
	var development = settings.Development;
	if (development.enabled && development.references) {
		this.element.JSUI = this;
	}

	//setup first type+event
	addProperty(this, 'type');
	this.on('typeChanged', (e) => {
		if (e && e.detail && e.detail.new){
			if (this.element && e.detail.new){
				var name = e.detail.new;
				if (!name) {return; }
				addClass(this.element, name);
			}
		}
	});
	this.type = tag;

	//add styling capabilities
	this.style = new StyleInline(this);

	//signal that this class has been built
	this.trigger('constructed');
	return this;
}