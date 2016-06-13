app.controller("Landmarks", ["$scope", function($scope)
{
  $scope.landmarks = [
    {
      name: "Statue of Liberty",
      image: "images/statueOfLiberty.jpg",
      desc: "testing 1"
    },
    {
      name: "Mount Rushmore",
      image: "images/mountRushmore.jpg",
      desc: "testing 2"
    },
    {
      name: "Eiffel Tower",
      image: "images/eiffelTower.jpg",
      desc: "testing 2"
    }
  ];
}]);
