import { default as addProperty } from '../../Utilities/Properties/add';
import addClass from '../../Utilities/Elements/addClass';
import getHandledType from './getHandledType';
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