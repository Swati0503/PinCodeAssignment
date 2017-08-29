letMeFindYouApp.controller("loginController", function($uibModal, $scope) {
    console.log("hey there in loginController!");
    $scope.animationsEnabled = true;

    $scope.open = function (size, parentSelector) {
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'partialPages/login.html',
      controller: 'loginInstanceController'
    });
  };
});

letMeFindYouApp.controller("loginInstanceController", function($uibModalInstance, $scope) {
    console.log("hey there in loginInstanceController!");
    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss();
    };
});