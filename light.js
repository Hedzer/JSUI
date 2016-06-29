(function() {
	'use strict';
	var Methods = {
		Add:{
			element:function(element){
				if (this.element){
					this.element.appendChild(element);
				}
			},
			light:function(instance){
				if (this.element && instance.element){
					this.element.appendChild(instance.element);
					this.private.children = (this.private.children || {});
					this.private.children[instance.uid] = instance;
					instance.private.parent = this;
				}
				var options = {
					as:function(name){
						if (name){
							this[name] = instance;
							instance.private.mapped = (instance.private.mapped || {});
							var map = instance.private.mapped;
							map[this.uid] = (map[this.uid] || []);
							map[this.uid].push(name);
						}
						return instance;
					}
				};
				return options;
			},
			array:function(collection){
				var results = [];
				collection.forEach(function(item){
					results.push(Syrup.Additions.add.call(this, item));
				});
				return results;
			},
			string:function(str){
				Syrup.Tools.addEventedProperty(this, str);
			},
			html:function(str){
				if (this.element && this.element.appendChild){
					var fragment = document.createDocumentFragment();
					var root = document.createElement('div');
					root.innerHTML = str;
					while (root.firstChild) {
						fragment.appendChild(root.firstChild);
					}
					this.element.appendChild(fragment);			
				}
			}
		},
		AddTo:{
			element:function(element){
				if (element){
					element.appendChild(this.element);
				}
			},
			light:function(instance){
				return this.add.call(instance, this);
			},
			array:function(collection){
				var results = [];
				collection.forEach((item) => {
					results.push(this.addTo.call(this, item));
				});
				return results;
			}
		}
	};
	var Utils = {
		uid:(function(){
			var prefix = "";
			var current = 0;
			var max = Number.MAX_SAFE_INTEGER - 5;
			return function uid(){
				if (current > max){
					prefix+=current;
					current = 0;
				}
				return prefix+current++;
			}				
		})(),
		getType:function(u){
			var t = typeof u;
			if (t === "object"){
				if (u === null){return "null"}
				if (u.constructor === Array){return "array"}
				if (u instanceof Element){return "element"}
				if (u instanceof light){return "light"}
				if (u instanceof RegExp){return "regex"}
			}
			if (t === "string"){
				var rHTML = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
				if (rHTML.test(u)){
					return "html";
				}
			}
			return t;
		}
	};
	class element {
		constructor(){

		}
		add(item) {
			var type = Utils.getType(item);
			var method = Methods.Add[type];
			return (method || function(){})(item);
		}
		addTo(item) {
			var type = Utils.getType(item);
			var method = Methods.AddTo[type];
			return (method || function(){})(item);
		}
		remove(item) {

		}
		on(event, method) {

		}
		trigger(event, args) {

		}
		find(what) {

		}
		with(method) {

		}
	}

})();