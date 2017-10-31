var isArray = {
	meta: {
		version: 1,
		type: 'function',
		self: '/Documentation/TypeChecks/isArray'
	},
	name: 'isArray',
	arguments: {
		names: ['u'],
		details: {
			u: {
				types: {}
			}
		}
	},
	file: 'JSUI/Source/TypeChecks/isArray',
	test: '/Tests/TypeChecks/isArray',
	examples: [
		{
			inputs: {
				u: []
			},
			output: true,
			fiddle: 'https://jsfiddle.net/...'
		}
	]
};

export default isArray;