// setting up a simple server with express

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

// express middleware to create routes for the dist folder inside the client side folder; serves static files in the entire client's dist folder; want to give them the bundled files, not the unbundled files
app.use(express.static('../client/dist'));

// more middleware to handle json and url encoding
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// then connect the HTML routes to the app
require('./routes/htmlRoutes')(app);

// tell the app which port to listen to
app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT} `));
