projectModule.factory('projectService', function(DB_URL) {
			return  {

					getAllprojects : function(callback) {

						var Datastore = require('nedb')
						, path = require('path');
						db = {};
						db.projects = new Datastore({ filename:DB_URL+'/projects.db',autoload: true });

											db.projects.find({}, function (err, lvs) {
												if(err)
															console.log(err);
														else

															callback(lvs);


											});
					},
					getprojectById : function(id,callback) {

						var Datastore = require('nedb')
						, path = require('path');
						db = {};
						db.projects = new Datastore({ filename:DB_URL+'/projects.db',autoload: true });

											db.projects.findOne({_id:id}, function (err, lv) {
												if(err)
															console.log(err);
														else
															{
																		callback(lv);
															}
											});
					},

					removeproject: function(project,callback) {
						var Datastore = require('nedb')
						, path = require('path');
						db = {};
						db.projects = new Datastore({ filename:DB_URL+'/projects.db',autoload: true });

						db.projects.remove({ _id: project._id }, {}, function (err, numRemoved) {
							if(err)
									console.log(err);
								else
									{
									db.projects.persistence.compactDatafile();
									callback(numRemoved);
								}
						});

					},
					upsertproject: function(project,callback) {
						var Datastore = require('nedb')
						, path = require('path');
						db = {};
						db.projects = new Datastore({ filename:DB_URL+'/projects.db',autoload: true });

						db.projects.update({_id: project._id}, {
							_id: project._id,
							name: project.name,
							description: project.description,
							creationDate: new Date(),
							dueDate: project.dueDate,
							closingDate: project.closingDate,
							gitHost: project.gitHost,
							gitUsername: project.gitUsername,
							gitProjectName : project.gitProjectName,
							isFinished: project.isFinished

						}, {upsert:true}, function(err,numReplaced,lv){
							if(err)
									console.log(err);
								else
									{
									db.projects.persistence.compactDatafile();
									callback(lv);
								}
						});


			}
		};

});
