const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/TutRealm', { useNewUrlParser: true });

const Tutorial = mongoose.model('Tutorial', {
  title: String,
  description: String
});