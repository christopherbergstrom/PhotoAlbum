app.controller("MainController", ["$scope", function($scope)
{
  $scope.landmarks = [
    {
      name: "Test1",
      image: "../../images/test1",
      desc: "testing 1"
    }
  ];
  $scope.isFullscreen = false;
  $scope.toggleFullScreen = function()
  {
    $scope.isFullscreen = !$scope.isFullscreen;
  };
}]);
