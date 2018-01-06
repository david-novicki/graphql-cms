const { makeExecutableSchema } = require('graphql-tools');
const User = require('./models/user');

const typeFields = Object.entries(User.fields).map(field => {
	//console.log(field);
	return `${field[0]}: ${field[1].type.getMongooseType()}`
});
// const queryFields = Object.entries(User.fields).map(field => {
// 	//console.log(field);
// 	return `${field[0]}: ${field[1].type.getMongooseType()}`
// });
const identDefs = `
	type ${User.identifier} {
		${typeFields.join('\r\n\t\t')}
	}
`;
const queryDefs = `
	type Query {
		${User.query}: [${User.identifier}!]!
	}
`;
const typeDefs = `${identDefs}${queryDefs}`;
const resolvers = {
	Query: {
		[User.query]: User.resolver
	}
};
// // Define your types here.
// const typeDefs = `
//   type Link {
//     id: ID!
//     url: String!
//     description: String!
//   }
// `;

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({ typeDefs, resolvers });