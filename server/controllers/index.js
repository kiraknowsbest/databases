var models = require('../models');

var headers = {
  'Content-Type': 'text/html'
};

module.exports = {
  messages: {
    //called from routes
    get: function (req, res) {
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('She was right again, bro bro');
      models.messages.post(req.body, function () {
        res.end();
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    },
    post: function (req, res) {
      console.log('Jules was right, bro');
      var body = '';
      req.on('data', function (chunk) {
        body += chunk;
      });
      models.users.post(req.body, function () {
        res.end();
        console.log( 'AFTER OR BEFORE? THE WORLD MAY NEVER KNOW' );
      });
      // req.on('end', function () {
      //   console.log( 'THIS IS THE REQUEST END' );
      // });
    }
  },
};

