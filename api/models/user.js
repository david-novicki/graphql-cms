const Types = require('../../types');

let User = {
	identifier: 'User',
	query: 'users',
	resolver: () => [{ name: 'test' }],
	fields: {
		name: { type: new Types.Text },
		title: { type: new Types.Text }
	}
}
module.exports = User;