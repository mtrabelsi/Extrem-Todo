var app =  angular.module('module.app',
										[
										'ngTable',
										'mgcrea.ngStrap',
										'ngAnimate',
										'ui.router',

										'module.login',
										'Const',
										'module.user',
										'module.toolbar',
										'module.project'
										// 'module.level',
										
										]);

										//initialize toolbar just by injectin it
										//we've to change this later to manipulate it mannually(init, delete, refrash..)
										// app.run(function(Toolbar) {
										// });
