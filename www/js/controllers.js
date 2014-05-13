angular.module('idayIonic.controllers', [])

.controller('AppCtrl', function($scope, $rootScope, RecruitingCompanies) {
  

  $rootScope.all_companies = RecruitingCompanies.all();
   //$scope.positions = [
  $rootScope.positions = [ 
      { friendlyName: 'Full Time', name: 'fte'},
      { friendlyName: 'Intern', name: 'intern' },
      { friendlyName: 'Co-Op', name: 'coop' },
      { friendlyName: 'MS/PhD', name: 'msphd'}
  ];
    
    //$scope.majors = [   
    $rootScope.majors = [ 
      { friendlyName: 'Applied Math', name: 'am'},
      { friendlyName: 'Biomedical', name: 'bme'},
      { friendlyName: 'Chemical', name: 'chem'},
      { friendlyName: 'Civil', name: 'civil'},
      { friendlyName: 'Computer', name: 'ce'},
      { friendlyName: 'CompSci', name: 'cs'},
      { friendlyName: 'Electrical', name: 'ee'},
      { friendlyName: 'Environmental', name: 'enve'},
      { friendlyName: 'Industrial', name: 'ie'},
      { friendlyName: 'MaDE', name: 'made'},
      { friendlyName: 'Material Science', name:'matsci' },
      { friendlyName: 'Mechanical', name: 'mech' },
      { friendlyName: 'Non-engineering', name: 'noneng' }
    ];

    $rootScope.majorsIncluded = []; //$scope.majorsIncluded = [];
    $rootScope.positionsIncluded = []; //$scope.positionsIncluded = [];


     //$scope.includeMajor = function (m) {
    $rootScope.includeMajor = function (m) {
        var i = $rootScope.majorsIncluded.indexOf(m);
        if (i > -1) { $rootScope.majorsIncluded.splice(i, 1); } 
        else { $rootScope.majorsIncluded.push(m); }
    }
    
     //$scope.includePosition = function (p) {
     $rootScope.includePosition = function (p) {
        var i = $rootScope.positionsIncluded.indexOf(p);
        if (i > -1) { $rootScope.positionsIncluded.splice(i, 1); } 
        else { $rootScope.positionsIncluded.push(p); }
    }


$rootScope.userFilter = function (company) {
        
        var includedPositions= $rootScope.positionsIncluded;
        var includedMajors = $rootScope.majorsIncluded;
        //var includedPositions= $scope.positionsIncluded;
        //var includedMajors = $scope.majorsIncluded;
        
        //if($scope.majorsIncluded.length <= 0 && $scope.positionsIncluded.length <= 0)
        if(includedMajors.length <= 0 && includedPositions.length <= 0)
            return company;
        
        //if($scope.positionsIncluded.length <= 0)
        if(includedPositions.length <= 0)
          includedPositions = ["fte","intern","coop","msphd"];
            
        //if($scope.majorsIncluded.length <= 0)
        if(includedMajors.length <= 0)
          includedMajors = ["am","bme","chem","civil","ce","cs","ee","enve","ie","made","matsci","mech","noneng"];
        

        
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






.controller('CompanyListCtrl', function($scope, $rootScope) { //, RecruitingCompanies) {
  
  //$scope.companies = RecruitingCompanies.all();
  $scope.companies = $rootScope.all_companies;

   







})

.controller('CompanyCtrl', function($scope, $stateParams, $rootScope) {//, RecruitingCompanies) {
 // $scope.company = RecruitingCompanies.get([$stateParams.companyURLId]);
  $scope.company = $rootScope.all_companies[$stateParams.companyURLId];

    $scope.majors = $rootScope.majors;
    $scope.jobs = $rootScope.positions; 


    // need to figure out rootscope shit
    // if its in rootscope its already accessible?
    // pass from a diff scope??
    // does every scope need access to this info?

})




/*
.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('CompanyListCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('CompanyCtrl', function($scope, $stateParams) {
	})
*/