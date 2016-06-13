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
