
var paymentModule = angular.module('module.payment', []);

paymentModule.controller('PaymentController', function($scope,$filter,$modal, ngTableParams, userService,users) {

$scope.users = users;

             $scope.tableParams = new ngTableParams({
                         page: 1,            // params
                         count: 10
                     }, {
                         total: $scope.users.length, // length of data
                         counts: [10,13],

                         getData: function($defer, params) {
                             // use build-in angular filter
                             var orderedData = params.filter() ?
                                     $filter('filter')($scope.users, params.filter()) :
                                     $scope.users;

                            $scope.tmp = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

                             params.total(orderedData.length); // set total for recalc pagination
                             $defer.resolve($scope.tmp);
                         }
                     });

var modalConfirm = $modal({scope: $scope,controller:'PaymentController' ,template: 'frontend/components/payment/views/payment.confirm.html', show: false});
var modalPayment = $modal({scope: $scope,controller:'PaymentController' ,template: 'frontend/components/payment/views/payment.create.html', show: false});

$scope.confirm = function(user) {
  $scope.toPayUser = user;
  modalConfirm.$promise.then(modalConfirm.show);
}

$scope.button = {
  checkbox: {
    t1: {s:true,c:false,g:false,p:false,a:false},
    t2: {s:false,c:false,g:false,p:false,a:false},
    t3: {s:false,c:false,g:false,p:false,a:true}
  }
};

$scope.payment = function() {
  // alert('payment '+$scope.toPayuser.firstname);
  modalPayment.$promise.then(modalPayment.show);

}

});
