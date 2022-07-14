const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DATABASE_URI, (err) => {
  if (err) throw err;
  console.log('DB connected successfully!');
});
mongoose.Promise = global.Promise;

module.exports = mongoose;