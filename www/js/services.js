angular.module('idayIonic.services', [])

/**
 * A simple example service that returns some data.

Might use a resource here that returns a JSON array


We're just using a javascript array
created from a .csv file from Excel
then converted using http://shancarter.github.io/mr-data-converter/
on JSON - properties setting

and then manually sanitizing the data
ie. adding escapes for quotes, removing line breaks, etc. 

this should be done with a parser but spending my time on other things
*/

.factory('RecruitingCompanies', function() {

  // friendlyName = The name to display in the interface
  // name = the csv/json-safe name for filtering etc





// moved javascript arrays to a seprate file 
// for modularizationification

// i'm not super careful about property names, need to be more
// like nameid and compid and how they are used in the ui html templates















    
  

  return {
    allCompanies: function() {
      return companies;
    },

    allBooths: function() {

      // assumes that each company has only 1 booth assigned
      // and that 2 companies don't/cant share a booth
      // because it will overwrite
      // does not check for sufficient number of booths
      // assumes length of booths is same as length of companies....
      // ... i think
      // starting with 1 becauase normal people use 1 indexing
      // not zero indexing IRL
      // no wait actually this is janky
      // ill use indexes
      // but keep in mind companies refer to the booth numer
      // so will subtract 1 to get actual booth index

      // Assign companies to booths
      // loop assigns companies to booths for generating svg
       for (var i = 0; i < companies.length; i++) {
          var currentCompanyBoothIdx = companies[i].booth - 1;
          // will create a property if it doesnt exist, i think
          booths[currentCompanyBoothIdx].compId = companies[i].nameId;

          // need some conditional about how to display it
          // based on if it is still an active company?
          // this should be done elsewhere
          // ehre in factory assume all active
          booths[currentCompanyBoothIdx].isActive = true;
        }

      return booths;
    },

    getBoothLayoutSVG: function() {


      for (var i = 0; i < companies.length; i++) {
        var currentCompanyBoothIdx = booths[i].booth - 1;
          booths[currentCompanyBoothIdx].compId = companies[i].nameId;
        }
      // assume booths have already been assigned


      for (var i = 0; i < booths.length; i++) {
          var currentBoothId = "booth"+booths[i].booth;
          console.log(currentBoothId);

          // this is soooo inefficient just trying stuff
          for (var j = 0; j < boothLayoutSVG.length; j++) {
              if (boothLayoutSVG[j].id == currentBoothId) {

                // will create a property if it doesnt exist, i think
          boothLayoutSVG[j].compId = booths[i].compId;
          boothLayoutSVG[j].room = booths[i].Room;
          boothLayoutSVG[j].floor = booths[i].Floor;

              }
// need some conditional about how to display it
          // based on if it is still an active company?
          // this should be done elsewhere
          // ehre in factory assume all active
          boothLayoutSVG[j].isActive = true;
          }

          

          
        }

      return boothLayoutSVG;
    },


    allMajors: function() {
      return majors;
    },

    allPositions: function() {
      return positions;
    },
   

    // idx used to be for Simple index lookup - ie by original array index pos //return companies[companyIdx];
    // now using the company name/url-safe id
    // probably not very efficient but ohwell, small data set
    get: function(companyIdx) {
      // Get / look up company by its nameId
      
      // is this more efficient?
      //for (var i = companies.length - 1; i >= 0; i--) {

        for (var i = 0; i< companies.length; i++) {
          if (companies[i].nameId == companyIdx) return companies[i];

          // TODO: account for no valid return value
      };
    }

  }
});



