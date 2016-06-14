app.controller("Landmarks", ["$scope", function($scope)
{
  $scope.landmarks = [
    {
      name: "Colosseum",
      image: "images/landmarks/colosseum.jpg",
      loc: "Rome, Italy"
    },
    {
      name: "Pyramids of Giza",
      image: "images/landmarks/pyramids.jpg",
      loc: "Egypt"
    },
    {
      name: "Statue of Liberty",
      image: "images/landmarks/statueOfLiberty.jpg",
      loc: "New York, New York"
    },
    {
      name: "Mount Rushmore",
      image: "images/landmarks/mountRushmore.jpg",
      loc: "Keystone, South Dakota"
    },
    {
      name: "Eiffel Tower",
      image: "images/landmarks/eiffelTower.jpg",
      loc: "Paris, France"
    }
  ];
  $scope.toggleFullScreen = function(img)
  {
    // var elem = document.getElementById("myvideo");
    if (img.requestFullscreen)
    {
      img.requestFullscreen();
    }
    // this.style.width="100%";
    // this.style.height="100%";
  };
}]);
