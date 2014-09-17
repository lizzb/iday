angular.module('idayIonic.controllers', [])

.controller('AppCtrl', function($scope, $rootScope, RecruitingCompanies) {
  
  // hacky, using global variables/rootscope
  // one of these days need to really understand scope and such...

  $rootScope.all_companies = RecruitingCompanies.allCompanies();

  //$rootScope.company_map = RecruitingCompanies.assignBooths();
  $rootScope.all_booths = RecruitingCompanies.allBooths();

  $rootScope.booth_floorplan = RecruitingCompanies.getBoothLayoutSVG();

  

  $rootScope.MAJORS = RecruitingCompanies.allMajors();
  $rootScope.POSITIONS = RecruitingCompanies.allPositions();
 
  $rootScope.majorsIncluded = []; // 'cs'
  $rootScope.positionsIncluded = []; //coop


    $rootScope.includeMajor = function (m) {
        var i = $rootScope.majorsIncluded.indexOf(m);
        if (i > -1) { $rootScope.majorsIncluded.splice(i, 1); } 
        else { $rootScope.majorsIncluded.push(m); }
    }
    
     $rootScope.includePosition = function (p) {
        var i = $rootScope.positionsIncluded.indexOf(p);
        if (i > -1) { $rootScope.positionsIncluded.splice(i, 1); } 
        else { $rootScope.positionsIncluded.push(p); }
    }

    //
    //
    //
    $rootScope.userFilter = function (company) {
        
        var includedPositions= $rootScope.positionsIncluded;
        var includedMajors = $rootScope.majorsIncluded;

        // if no filters at all selected automatically return all companies
        
        if(includedMajors.length <= 0 && includedPositions.length <= 0)
            return company;
        
        // if nothing selected, assume all included
        // for both majors and positions


        // friendlyName = The name to display in the interface
        // name = the csv/json-safe name for filtering etc
        // e.g. MS/PhD value is set to msphd

        if(includedPositions.length <= 0)
        {
          // this is only specific to the data that i developed with
          //includedPositions = ["fte","intern","coop","msphd"];
          for (var i = 0; i < POSITIONS.length; i++)
            includedPositions[i] = POSITIONS[i].name;
        }
            
        if(includedMajors.length <= 0)
        {
          // this is only specific to the data that i developed with
          //includedMajors = ["am","bme","chem","civil","ce","cs","ee","enve","ie","made","matsci","mech","noneng"];
          for (var i = 0; i < MAJORS.length; i++)
            includedMajors[i] = MAJORS[i].name;
        }
        
        
        // only show companies matching the users filter requirements
        for (var i = 0; i < includedPositions.length; i++)
        {
            // check if a position is true
            if(company[includedPositions[i]])
            {
                // must have at least one of these true as well
                for (var j = 0; j < includedMajors.length; j++)
                {
                    if(company[includedMajors[j]]) return company;
                }
            }
        }
        return;
    }
})





//
//
//
.controller('CompanyListCtrl', function($scope, $rootScope) {
  
  $scope.companies = $rootScope.all_companies;

  //$rootScope.userFilter

})



//
//
//
.controller('CompanyCtrl', function($scope, $stateParams, $rootScope) {

    $scope.company = "";

    // im sure this is inefficient
    // find matching company based on given nameId (a url-safe text name shortening)
    //
    for (var i = 0; i < $rootScope.all_companies.length; i++)
    {
        var tempName = $rootScope.all_companies[i].nameId;
        if(tempName == $stateParams.companyURLId)
        {
          $scope.company = $rootScope.all_companies[i];
          
          // should break so as not to go through rest of the companies
          // i believe the url routing will make sure that it doesn't
          // go to an invalid company details page.....?
          // if not, should set up a default fallback
        }     
    }

    // Feed in the universal "pretty names" for majors and positions
    // this information doesn't need to be available on every page
    // probably a more efficient scope-conscious way to do this
    $scope.majors = $rootScope.MAJORS;  //.majors;
    $scope.positions = $rootScope.POSITIONS; // .positions; 

})


//
//
//
.controller('CompanyMapCtrl', function($scope, /*$stateParams,*/ $rootScope, $location) {
   
   // $scope.companies = $rootScope.all_companies;

   $scope.boothWidth = 60; //80;
   $scope.boothHeight = 60; //40;

   $scope.booths = $rootScope.all_booths;
   $scope.companies = $rootScope.all_companies;

   $scope.floorplan = $rootScope.booth_floorplan;

   // Find min and max coordinates to determine appropriate 
   // map size and ....
   // set these in loop
   // dont set to 0! what if that is smaller than min or larger than max
   var xMin = 0; // $scope.floorplan[0];
   var xMax = 0; // $scope.floorplan[0];
   var yMin = 0; // $scope.floorplan[0];
   var yMax = 0; // $scope.floorplan[0];

   // if floorplan list isnt intialized for some reason
   // if (scope.floorplan.length <= 0)
   // then dont loop through 
   // deal with this properly.... TODO

   // i could probaly make a variable in javascript thats not 
   // in scope cuz these dont need to pass... i dotn think... actually idk


   if($scope.companies.length > 0)
   {
   $scope.xMin = $scope.floorplan[0].x;
   $scope.xMax = $scope.floorplan[0].x;
   $scope.yMin = $scope.floorplan[0].y;
   $scope.yMax = $scope.floorplan[0].y;
 }


   for (var i = 0; i < $scope.floorplan.length; i++)
   {
   	var boothPos = $scope.floorplan[i];
   	if (boothPos.x < xMin) xMin = boothPos.x;
   	if (boothPos.x > xMax) xMax = boothPos.x;
   	if (boothPos.y < yMin) yMin = boothPos.y;
   	if (boothPos.y > yMax) yMax = boothPos.y;
  
   }
/*
   $scope.mapWidth = xMax - xMin;
   $scope.mapHeight = yMax - yMin;

   // top left corner coordinates to start map and position viewport
   $scope.startX = xMin;
   $scope.startY = yMin;
*/

$scope.mapWidth = xMax - xMin + $scope.boothWidth;
   $scope.mapHeight = yMax - yMin + $scope.boothHeight;

   $scope.startX = xMin;
   $scope.startY = yMin;

   // viewBox="{{startX}} {{startY}} {{mapWidth+100}} {{mapHeight+100}} "



   // cool trick i found for working around the fact that an svg g element cant be a link
   // or osmething
   //whatever helps make it so clicking on a booth rect in svg goes to the company details page
   // in current implementation
   $scope.go = function ( path ) {
  $location.path( path );
  };

   // this is handled by routing i think? but not positive
   // actually no if you want to trigger a differnt event or look on current url booth
   // will ahe to feed in
   // if it came in with a specific parameter for a booth jupm to that one like an anchor
   //$scope.company = $rootScope.all_companies[$stateParams.companyURLId];
  });
