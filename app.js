(function () {
'use strict'

angular.module('DIApp', [])

.controller('DICOntroller', DICOntroller);

function DICOntroller($scope
                    , $filter
                    , $injector
                    ) {

  $scope.name = "Abdelhay";


  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);

  };

  console.log($injector.annotate(DICOntroller));

  }

  function AnnonateMe(name, job, blah) {
    return "blah!";

  console.log(AnnonateMe.toString());


}

})();
