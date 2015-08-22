todoModule.factory('todoService', function(DB_URL) {
			return  {

					getAlltodos : function(callback) {

						var Datastore = require('nedb')
						, path = require('path');
						db = {};
						db.todos = new Datastore({ filename:DB_URL+'/todos.db',autoload: true });

											db.todos.find({}, function (err, lvs) {
												if(err)
															console.log(err);
														else

															callback(lvs);


											});
					},
					gettodoById : function(id,callback) {

						var Datastore = require('nedb')
						, path = require('path');
						db = {};
						db.todos = new Datastore({ filename:DB_URL+'/todos.db',autoload: true });

											db.todos.findOne({_id:id}, function (err, lv) {
												if(err)
															console.log(err);
														else
															{
																		callback(lv);
															}
											});
					},

					removetodo: function(todo,callback) {
						var Datastore = require('nedb')
						, path = require('path');
						db = {};
						db.todos = new Datastore({ filename:DB_URL+'/todos.db',autoload: true });

						db.todos.remove({ _id: todo._id }, {}, function (err, numRemoved) {
							if(err)
									console.log(err);
								else
									{
									db.todos.persistence.compactDatafile();
									callback(numRemoved);
								}
						});

					},
					upserttodo: function(todo,callback) {
						var Datastore = require('nedb')
						, path = require('path');
						db = {};
						db.todos = new Datastore({ filename:DB_URL+'/todos.db',autoload: true });

						db.todos.update({_id: todo._id}, {
							_id: todo._id,
							title: todo.title,
							description: todo.description,
							created: new Date(),
							dueDate: todo.dueDate,
							

						}, {upsert:true}, function(err,numReplaced,lv){
							if(err)
									console.log(err);
								else
									{
									db.todos.persistence.compactDatafile();
									callback(lv);
								}
						});


			}
		};

});
