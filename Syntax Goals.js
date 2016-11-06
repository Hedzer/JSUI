//Creating a ul jsui element
let list = new JSUI.Elements.Ul();

//adding one element into another, anonymously
let firstItem = new JSUI.Elements.Li();
list.add(firstItem);

//adding one element into another, named
let secondItem = new JSUI.Elements.Li();
list.add(secondItem).as('SecondItem');

//accessing a named element, setting text
list.SecondItem.text('This is the second item');

//adding elements to others, inverse, anonymous
let thirdItem = new JSUI.Elements.Li();
thirdItem.addTo(list);

//adding elements to others, inverse, named
let thirdItem = new JSUI.Elements.Li();
thirdItem.addTo(list).as('ThirdItem');

//adding collections of things
list.add([firstItem, secondItem, thirdItem]);

//adding jsui elements to native dom elements
list.addTo(document.body);

//removing an element
list.ThirdItem.remove();
//or
list.remove(list.ThirdItem);

//setting events
list.on('click', function(ev) {
	//do things
});

//setting multiple events to a single action
list.on(['click', 'touchstart'], function(ev) {
	//do things
});

//setting multiple events to different methods
list.on({
	click: function(ev) { /* do things */ },
	touchstart: function(ev) { /* do things */ }
});

//setting a debounced event
list.on('scroll', function(ev) {
	//do things
}).debounce(150); //ms

//setting a throttled event
list.on('scroll', function(ev) {
	//do things
}).throttle(150); //ms

//removing an event
let receipt = list.on('click', (ev) => { /* do things */ });
receipt.remove();

//removing all events of a type (e.g. 'click')
let receipt = list.on('click', (ev) => { /* do things */ });
receipt.removeAll();

//limit the number of times an event will trigger
let receipt = list.on('click', (ev) => { /* do things */ }).limit(5);

//limit the number of times an event will trigger to one
let receipt = list.on('click', (ev) => { /* do things */ }).once();

//triggering events
list.trigger('click', {x: 10, y: 20});

//triggering multiple events with the same data
list.trigger(['click', 'touchstart'], {x: 10, y: 20});

//triggering multiple events with different data
list.trigger({
	click: {x: 10, y: 20},
	touchstart: {x: 30, y: 40}
});

//set classes (will produce: class='fill themed')
list.class({
	fill: true,
	themed: true
});

//add a class
list.class('themed').add();

//remove a class
list.class('themed').remove();

//add/removing classes using the returned action
let themedClass = list.class('themed');
themedClass.add();
themedClass.remove();

//getting a list of all classes
let classes = list.class();
if (classes.themed) {
	//do something
}
//alternatively
if (list.class().themed) {
	//do something
}

//getting the value of an attribute
let listType = list.attribute('type');

//getting all attributes as a key value pair
let attributes = list.attribute();
if (attributes.type === 'A') {
	//do something
}
//alternatively
if (list.attribute().type === 'A') {
	//do something
}

//getting multiple, limited attributes
let attributes = list.attribute(['title', 'lang', 'dir']);
if (attributes.title) {
	//do something
}

//setting multiple attributes to the same value
list.attribute(['title', 'data-popover'], 'I am a list!');

//setting multiple attributes to multiple values
list.attribute({
	title: 'I am a list!',
	id: 'my-list'
});

//adding an eventful property
list.add('isLazyLoaded');
list.add('isInfinite');

//setting/getting the property normally
if (list.isLazyLoaded) {
	//do something
}
list.isLazyLoaded = true;

//getting a property 
let isLazy = list.get('isLazyLoaded');

//getting a nested property
let isSecondLazy = list.get('@SecondItem.isLazyLoaded');

//getting multiple properties
let keys = ['isLazyLoaded', 'isInfinite'];
let values = list.get(keys);

for (var i = 0; i < 2; i++) {
	console.log(`The value for ${keys[i]} is ${values[i]}`);
};
//or
keys.forEach((key) => {
	console.log(`The value for ${key} is ${values[key]}`);
});
//or
if (values.isLazyLoaded) {
	//do something
}

//setting a property
list.set('isLazyLoaded', true);
//alternatively
list.isLazyLoaded = true;

//settings a nested property
list.set('@SecondItem.isLazyLoaded', true);

//setting multiple properties to the same value
list.set(['isLazyLoaded', 'isInfinite', '@SecondItem.isLazyLoaded'], true);

//setting multiple properties to multiple values
list.set({
	isLazyLoaded: true,
	isInfinite: true
});

//doing single command
list.do('attribute', ['title', 'I am a list!']);
//is equivalent to: list.attribute('title', 'I am a list!');

//doing batch commands/macros
list.do({
	attribute: ['title', 'I am a list!'],
	add: [[firstItem, secondItem, thirdItem]]
});

//doing a nested command
list.do('@firstItem.attribute', ['title', 'I am a list item']);

//executing methods with modified context
let task = function() {
	this.class('themed').add();
	this.text('I am a list item');
};

list.do(task); //is equivalent to task.call(list);
//list will now have the themed class, and 'I am a list item' as text.


//executing methods with modified context and arguments
let task = function(args) {
	if (!isObject(args)) { return; }
	if (args.isThemed) {
		this.class('themed').add();
	}
	if (args.tooltip) {
		this.attribute('title', args.tooltip);
	}
};

list.do(task, {isThemed: true, tooltip: "Ceci n'est pas une tooltip."});


//finding an element by using css selectors
let listItems = list.find('li'); //returns li elements
let secondItem = list.find('#secondItem'); //returns element with id = "secondItem"

//finding elements that contain text matching a regex
let results = list.find(/searchstring/);

//find all elements that inherit from Div
let results = list.find(JSUI.Elements.Div);
//or
let results = list.find(new JSUI.Elements.Div());

//list all children
let children = list.find();
//or
let children = list.children();

//get a list of filtered children
let filtered = list.children((child, id) => {
	return child.class().themed; 	//returns all children with the 'themed' class
});

//adding a style
let style = new JSUI.Style.Rule('.themed', {
	backgroundColor: 'blue',
	color: 'orange'
});

secondItem.add(style);