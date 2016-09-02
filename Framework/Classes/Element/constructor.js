import { default as addProperty } from '/Framework/Utilities/Properties/add';
import addClass from '/Framework/Utilities/Elements/addClass';
import getHandledType from '/Framework/Classes/Element/getHandledType';
import settings from '/Framework/Constants/JSUI/settings';
import StyleInline from '/Framework/Classes/StyleInline';
import handler from '/Framework/Classes/Element/Handlers/Constructor';

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