const express = require('express')
const app = express()

//Template Engines
var exphbs = require('express-handlebars');
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }));
app.set('view engine', 'hbs');

//DB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/TutRealm', { useNewUrlParser: true });


//Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(3000, () => {
  console.log('App listening on port 3000!')
})