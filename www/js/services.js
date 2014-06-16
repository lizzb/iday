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
      /* for (var i = 0; i < companies.length; i++) {
          var currentCompanyBoothIdx = companies[i].booth - 1;
          // will create a property if it doesnt exist, i think
          booths[currentCompanyBoothIdx].compId = companies[i].nameId;

          // need some conditional about how to display it
          // based on if it is still an active company?
          // this should be done elsewhere
          // ehre in factory assume all active
          booths[currentCompanyBoothIdx].isActive = true;
        }

      return booths;*/
    },

    getBoothLayoutSVG: function() {

        // cIdx index of company in companies
        // bIdx index of booth in booths (contains booth info)

        //
        // first go through matching company ids to booth numbers
        //
      for (var cIdx = 0; cIdx < companies.length; cIdx++) {

            // booth number associated with this company
            // is not 0 indexed, ie starts at 1 for normal people
            // so dont rely on position in arrays
            var cBooth = companies[cIdx].booth; 

            for (var bIdx = 0; bIdx < booths.length; bIdx++) {

              var b = booths[bIdx];

              // booth index not necessarily equal to booth number

              if(b.booth == cBooth)
              {

                // assign company url id to booth for url routing/links
                b.compId = companies[cIdx].nameId;

                // also assign booth properties to the company object
                // for filtering //... also just in case
                companies[cIdx].Room =  b.Room;
                companies[cIdx].Floor =  b.Floor;


                // now that weve linked company info to booth info
                // and vice versa
                // next ---> link booth + comp info to svg map
                // i'm sure i'm overusing info here but whatevs


                // id in html xml svg etc has to start with a letter not number
                var svgBoothId = "booth"+cBooth;


          for (var svgIdx = 0; svgIdx < boothLayoutSVG.length; svgIdx++) {
              if (boothLayoutSVG[svgIdx].id == svgBoothId) {

                  // will create a property if it doesnt exist, i think
                  boothLayoutSVG[svgIdx].compId = b.compId;
                  boothLayoutSVG[svgIdx].room = b.Room;
                  boothLayoutSVG[svgIdx].floor = b.Floor;
                  boothLayoutSVG[svgIdx].isActive = true;
              }
          }



          }

          } // for var bIdx
          } // for var cIdx

          // still draws empty things
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



