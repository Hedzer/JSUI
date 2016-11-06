import on from 'Framework/Utilities/Events/on';

export default describe("Framework/Utilities/Events/on", function() {
	var host = {
		private: {
			state: {},
			events: {},
			hooks: {}
		}
	};
	var triggered = false;
	var eventName = 'testEvent';
	var action = function() {
		triggered = true;
	};
	var handler = on.call(host, eventName, action);
	it("should have registered events", function() {
		expect(host.private.events[eventName]).not.toBeUndefined(action);
		expect(host.private.events[eventName][handler.id]).toBe(action);
	});
});