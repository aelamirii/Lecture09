(function () {
'use strict'

angular.module('DIApp', [])

.controller('DICOntroller', DICOntroller);

function DICOntroller($scope
                    , $filter
                    ,$injector
                      ) {

  $scope.name = "Abdelhay";

  $scope.upper = function () {

    var uppCase = $filter('uppercase');
    $scope.name = uppCase($scope.name);
  };

  console.log($injector.annotate(DICOntroller));

}


})();
