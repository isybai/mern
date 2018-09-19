const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');
const profiles = require('./routes/api/profiles');
const posts = require('./routes/api/posts');

const app = express();

//db config
const db = require('./config/keys').mongoURI;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDb
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.get('/', (req, res) => res.send('Hello dudeasas'));

// Routes
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profiles', profiles);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

