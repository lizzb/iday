//
//
//
//
app.controller('MainCtrl', function($scope, $ionicSideMenuDelegate, AttendeesService, CareerFairService) {
  
  $scope.attendees = AttendeesService.getAttendees();
  
  // Make sure that you link the booth and company info prior to 
  // brining the company info into the main controller
  // cuz that will be used by all other views, dont want to repeat work
  
  // maybe a factory for that bit??

  //$scope.floorplan = CareerFairService.getBooths(); //getBoothLayout();
  
  // pull from data.js
  $scope.majors = majors_list;
  $scope.positions = positions_list;
 
 
 $scope.companies = CareerFairService.getCompanies();
 //$scope.booths = CareerFairService.getBooths();
 
 //  console.log("companies 1 2 3", $scope.companies[0], $scope.companies[1], $scope.companies[2]);
 
  $scope.booths = CareerFairService.getBooths();
  //console.log("booths 1 2 3", $scope.booths[0], $scope.booths[1], $scope.booths[2]);
  
  //for (var i = 0; i < $scope.booths.length; i++) {
  //   booths[i].id = "booth"+bNum; // Assign element id's for svg/html
  //}
  
  $scope.toggleLeft = function() { $ionicSideMenuDelegate.toggleLeft(); };
})






// -------------------------------------------------------------
//
// Company List
//
app.controller('CompanyListCtrl', function($scope) {
  //$scope.companies = companies;
  
  
  $scope.clearSearch = function() {
    $scope.searchString = '';
  };
  
  
  $scope.scrollBottom = function() {
    $ionicScrollDelegate.scrollBottom(true);
  };
  
    $scope.scrollTop = function() {
    $ionicScrollDelegate.scrollTop(true);
  };
  
});

// -------------------------------------------------------------
//
// Company detail
//
app.controller('CompanyDetailCtrl', function($scope, company) {
  $scope.company = company;
})


// -------------------------------------------------------------
//
// Company Map / Booth Floorplan Layout
//
app.controller('CompanyMapCtrl', function($scope, $location) {
  
  $scope.go = function ( path ) { $location.path( path ); };
  
  $scope.bWidth = 60; // boothWidth
  $scope.bHeight = 60; // boothHeight
  
  // {{startX - 20}} {{startY - 20}} {{mapWidth + 20}} {{mapHeight + 20}}"
  
  
  $scope.startX = 0;
  $scope.startY = 0;
  $scope.mapWidth = 1200;
  $scope.mapHeight = 2400;
  
  //var xMin = 0;
  //var xMax = 0;
  //var yMin = 0;
  //var yMax = 0;

/*
  if ($scope.companies.length > 0) {
    xMin = $scope.companies[0].x;
    xMax = $scope.companies[0].x;
    yMin = $scope.companies[0].y;
    yMax = $scope.companies[0].y;
  }

  for (var i = 0; i < $scope.companies.length; i++) {
    var boothPos = $scope.companies[i];
    if (boothPos.x < xMin) xMin = boothPos.x;
    if (boothPos.x > xMax) xMax = boothPos.x;
    if (boothPos.y < yMin) yMin = boothPos.y;
    if (boothPos.y > yMax) yMax = boothPos.y;
  }*/

// this this is outdated......
 /* $scope.startX = xMin;
  $scope.startY = yMin;
  $scope.mapWidth = xMax - xMin + $scope.boothWidth;
  $scope.mapHeight = yMax - yMin + $scope.boothHeight;
  */
    // viewBox="-100 150 1500 400"
  //  $scope.paddingV = 10;
  //   $scope.paddingH = 10;
  // {{mapWidth+paddingH}} {{mapHeight+paddingV}}

  // viewBox="{{startX}} {{startY}} {{mapWidth+100}} {{mapHeight+100}} "

  
  
  
})



//
// Filter Settings
//
app.controller('FilterSettingsCtrl', function($scope) {
  
  
})





//
// Check-in
//
app.controller('CheckinCtrl', function($scope) {
  $scope.showForm = true;
  
  $scope.shirtSizes = [
    { text: 'Large', value: 'L' },
    { text: 'Medium', value: 'M' },
    { text: 'Small', value: 'S' }
  ];
  
  $scope.attendee = {};
  $scope.submit = function() {
    if(!$scope.attendee.firstname) {
      alert('Info required');
      return;
    }
    $scope.showForm = false;
    $scope.attendees.push($scope.attendee);
  };
  
})



//
// Attendee List - in MainCtrl
//
app.controller('AttendeesCtrl', function($scope) {
  //$scope.attendees = attendees;
  
})

//
// Attendee Activity / Toggles
//
app.controller('AttendeeActivityCtrl', function($scope) {
  
  $scope.activity = [];
  $scope.arrivedChange = function(attendee) {
    var msg = attendee.firstname + ' ' + attendee.lastname;
    msg += (!attendee.arrived ? ' has arrived, ' : ' just left, '); 
    msg += new Date().getMilliseconds();
    $scope.activity.push(msg);
    if($scope.activity.length > 3) {
      $scope.activity.splice(0, 1);
    }
  };
  
});
