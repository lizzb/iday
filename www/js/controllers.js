angular.module('idayIonic.controllers', [])

.controller('AppCtrl', function($scope, $rootScope, RecruitingCompanies) {
  

  $rootScope.all_companies = RecruitingCompanies.allCompanies();

  //$rootScope.company_map = RecruitingCompanies.assignBooths();
  $rootScope.all_booths = RecruitingCompanies.allBooths();
 

  // hacky, G letter following indicates global variable
  // one of these days need to really understand scope and such...

  // friendlyName = The name to display in the interface
  // name = the csv/json-safe name for filtering etc
  // current implementation has different properties named
  // company.am, company.cs... etc.

  $rootScope.positionsG = [ 
      { friendlyName: 'Full Time', name: 'fte'},
      { friendlyName: 'Intern', name: 'intern' },
      { friendlyName: 'Co-Op', name: 'coop' },
      { friendlyName: 'MS/PhD', name: 'msphd'}
  ];
    
    $rootScope.majorsG = [ 
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

    $rootScope.majorsIncluded = [];
    $rootScope.positionsIncluded = [];


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
        
        if(includedMajors.length <= 0 && includedPositions.length <= 0)
            return company;
        
        if(includedPositions.length <= 0)
          includedPositions = ["fte","intern","coop","msphd"];
            
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





//
//
//
.controller('CompanyListCtrl', function($scope, $rootScope) {
  
  $scope.companies = $rootScope.all_companies;

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
    $scope.majors = $rootScope.majors;
    $scope.jobs = $rootScope.positions; 

})


//
//
//
.controller('CompanyMapCtrl', function($scope, /*$stateParams,*/ $rootScope) {
   
   // $scope.companies = $rootScope.all_companies;

   $scope.boothWidth = 80;
   $scope.boothHeight = 40;

   $scope.booths = $rootScope.all_booths;
   $scope.companies = $rootScope.all_companies;

   // if it came in with a specific parameter for a booth jupm to that one like an anchor
   //$scope.company = $rootScope.all_companies[$stateParams.companyURLId];
  })
