letMeFindYouApp.controller("signUpController", function($uibModal, $scope) {
    console.log("hey there in signUpController!");
    $scope.animationsEnabled = true;

    $scope.open = function (size, parentSelector) {
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'partialPages/signUp.html',
      controller: 'signUpInstanceController'
    });
  };
});

letMeFindYouApp.controller("signUpInstanceController", function($uibModalInstance, $scope) {
    console.log("hey there in signUpInstanceController!");
    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss();
    };
});