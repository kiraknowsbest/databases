var db = require('../db');

/*

json: {
username: 'Valjean',
message: 'In mercy\'s name, three days is all I need.',
roomname: 'Hello'
}
*/

var insertUser = function (name, resEnd ) {
  db.connection.query('INSERT INTO usernames (username) VALUES (?)', [name], function(err, result) {
    if (err) {
      console.error( err );
    } else {
      console.log( 'result: ', result );
      resEnd();
    }
  });
};


// add room to database if non-existing
var addRooms = function ( name, callback ) {
  db.connection.query('INSERT INTO roomnames (roomname) VALUES (?)', [name], function(err, results) {
    if (err) {
      console.error(err);
    } else {
      console.log('Added Room ' + name + '!');
      callback(results);
    }
  });
};

var insertMessage = function (params, resEnd) {
  var userKey;
  var roomKey;
  //query sql database for existence of user
  db.connection.query('select id from usernames where username = ?', [params[0]], function(err, results) {
    if (err) {
      db.connection.query('insert into usernames (username) values (?)', [params[0]], function(err, results) {
        if (err) {
          console.error('ERROR===================',err);
        } else {
          console.log('added user ', [params[0]]);
          userKey = results.insertId;
        }
      });
    } else {
      console.log('RESULTS================',results);
    }
  });
    // if error
      // add user to database
      // save PK of new entry
    // else
      // pilfer from username table PK
    // then, if roomname in database 
      //if error
        // add to room database
        // retain PK of new room
      // else
        // pilfer PK from roomname database
    // then, add insert message with PK's to messages table
      // call resEnd

  addRooms( params[2], function (results) {
    /// results.insertId gives access to room id number
    db.connection.query('select * from usernames', function (err, results) {
      // roomId = results['insertId'];
      // console.log(results);
    });
  });
  //   connection.query('INSERT INTO messages (message, id_usernames, id_roomnames) VALUES (? ? ?)', (), params, function(err, result) {



  //   if (err) {
  //     console.error( err );
  //   } else {
  //     console.log( 'result: ', result );
  //     resEnd();
  //   }
  // });
};

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (params, resEnd) {
      var username = params.username;
      var message = params.message;
      var roomname = params.roomname;
      insertMessage([username, message, roomname], resEnd);
      // do some cool breaking-up stuff
      // call to db.index.js
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (params, resEnd) {
      insertUser(params.username, resEnd);
    }
  }
};
