app.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
//do not use html5 mode!
$urlRouterProvider.otherwise('/login');
    $stateProvider
                .state('login', {
                                      url: '/login',
                                      templateUrl: 'frontend/common/login/views/login.html',
																			controller: 'LoginController'
                                })

                .state('project', {
                                      url: '/project',
                                      templateUrl: 'frontend/components/project/views/project.html',
																			controller: 'projectController'
                                })
                .state('user', {
                                      url: '/user',
                                      templateUrl: 'frontend/components/user/views/user.html',
                											controller: 'userController'
                                })
                // .state('payment', {
                //                       url: '/payment',
                //                       templateUrl: 'frontend/components/payment/views/payment.html',
																// 			controller: 'PaymentController',
                //                       resolve: {
                //                            users: function (userService, $q) {
                //                                var defer = $q.defer();
                //                                //defer.promise.then(function () {
                //                                userService.getAllusers(function (sts) {
                //                                    //alert(JSON.stringify(sts));
                //                                    //return sts;
                //                                    defer.resolve(sts);
                //                                });
                //                                //})
                //                                //defer.resolve();
                //                                return defer.promise
                //                            }
                //                        }

                //                 })


});
