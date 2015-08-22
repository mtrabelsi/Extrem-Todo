userModule.factory('userService', function(DB_URL) {



			return  {


					getAllusers : function(callback) {

						var Datastore = require('nedb')
						, path = require('path');
						db = {};
						db.users = new Datastore({ filename:DB_URL+'/users.db',autoload: true });

											db.users.find({}, function (err, stds) {
												if(err)
															console.log(err);
														else

															callback(stds);

											});
					},

					removeuser: function(user,callback) {

						var Datastore = require('nedb')
						, path = require('path');
						db = {};
						db.users = new Datastore({ filename:DB_URL+'/users.db',autoload: true });

						db.users.remove({ _id: user._id }, {}, function (err, numRemoved) {
							if(err)
									console.log(err);
								else
									{
									db.users.persistence.compactDatafile();
									callback(numRemoved);
								}
						});

					},
					upsertuser: function(user,callback) {



// {"username":"admin","password":"0000","admin":true,"email":"marwen109@gmail.com","asp":"notyet","_id":"AD7EnP6NtEtC8gS0"}
// {"username":"agent","password":"0000","admin":true,"email":"marwen109@gmail.com","asp":"notyet","_id":"io19OCjH9GSAEM9l"}
						var Datastore = require('nedb')
						, path = require('path');
						db = {};
						db.users = new Datastore({ filename:DB_URL+'/users.db',autoload: true });

						db.users.update({_id: user._id}, {
									username: user.username,
									password: user.password,
									email :user.email,
									role: user.role
						},{upsert:true}, function(err,numReplaced,lv) {
							if(err)
									console.log(err);
								else
									{
									db.users.persistence.compactDatafile();
									callback(lv);
								}
						});
					}
		};

});
