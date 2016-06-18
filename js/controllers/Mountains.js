app.controller("Mountains", ["$scope", function($scope)
{
  $scope.mountains = [
    {
      name: "Half Dome",
      image: "images/mountains/halfDome.jpg",
      loc: "Yellow Stone National Park"
    },
    {
      name: "Matterhorn",
      image: "images/mountains/matterhorn.jpg",
      loc: ""
    },
    {
      name: "Mount McKinley",
      image: "images/mountains/mountMcKinley.jpg",
      loc: ""
    },
    {
      name: "Mount Kilimanjaro",
      image: "images/mountains/mountKilimanjaro.jpg",
      loc: ""
    },
    {
      name: "Mount Everest",
      image: "images/mountains/mountEverest.jpg",
      loc: ""
    }
  ];
}]);
