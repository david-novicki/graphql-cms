const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress } = require('apollo-server-express');
const schema = require('./schema');
const path = require('path');

var app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/', express.static('./dist/assets'));
app.use('*', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

const PORT = 9000
app.listen(PORT, () => {
	console.log(`CMS GraphQL server running on port ${PORT}.`)
});