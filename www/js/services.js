app.service('CareerFairService', function($q) {
  
  return {
    // Company grid contains:
    // id - string - the company id used in urls, and for referencing the company
    // name - string - the organization name to display
    // starred - boolean - whether or not this company has been flagged/starred as a favorite
    // booth - int - the unique booth number for this company
    // industry
    // description
    // majors
    // positions
    // citizenship
    companies: companies, //company_grid,
    
    
    // Booth information includes:
    // id - int - the unique booth number used to identify this booth and link it to a company
    // bNum, label - int - the label to display on the booth before a company is assigned
    // I'm just going to use the id number, and unlike tech expo, each room will NOT start counting booths at 1
    // itll be like iday, where the counting continues across rooms
    // room - string - the name of the room this booth is in (user-friendly format)
    // floor - int - the name of the floor this booth is on (user-friendly format)
    // x - int - top-left x coordinate on the svg map
    // y - int - top-left y coordinate on the svg map
    // rotate - int - degrees to rotate the booth 
    // compId - string - the abbreviated name and unique identifier of a company
    
    booths: booth_info,
    
    setCompanyBoothInfo: function() {
      // companies:
      // contains information about the companies
      // and who/what they are recruiting at this particular career fair
      // booths:
      // contains information about both the booths "real life location" (room, floor)
      // as well as their svg map location (coordinates, rotation)
      // assumption that booth - company mapping is exactly 1:1
      // ideally no empty booths, and each company has only one booth
      // empty booths are more likely though (cancellations)
      
      // so iterate through all booths and find the matching company for each (if any) -----
      
      // then copy the info the company details page would care about that is booth-specific
      // assign from the booth info
      // eg. link to booth on map, room, floor user-friendly data
      // company doesnt care about x, y, coordinates on the map,
      // ..... or whether it is active(matche params, display diff on map?)
      
      
      
    },
    // getBoothLayout
    getBooths: function() { return this.booths; },
    
    getBooth: function(boothNumber) {
      var dfd = $q.defer();
      this.booths.forEach(function(booth) {
        if (booth.bNum === boothNumber) dfd.resolve(booth);
      });

      return dfd.promise;
    },

    getCompanies: function() {

      for (var i = 0; i < this.companies.length; i++) {
        for (var j = 0; j < this.booths.length; j++) {
          
          if(this.companies[i].booth == this.booths[j].bNum) {
            this.companies[i].room = this.booths[j].room;
            this.companies[i].floor = this.booths[j].floor;
            
            this.booths[j].compId = this.companies[i].id;
            this.booths[j].id = "booth" + this.booths[j].bNum;
            
            //this.companies[i].booth = this.booths[j].id;
            break;
          }
        }
      }
      
      return this.companies;
    },
    
    getCompany: function(companyId) {
      var dfd = $q.defer();
      this.companies.forEach(function(company) {
        if (company.id === companyId) dfd.resolve(company);
      });

      return dfd.promise;
    }
  }
})

    //  this.companies.forEach(function(company) {
    //    for (var i = 0; i < this.booths.length; i++) {
    //      if(company.booth === booths[i].bNum) {
    //      }  }

app.service('AttendeesService', function($q) {
  
  return {
    
    attendees: [
    { id: '1', firstname: 'Nicolas', lastname: 'Cage', vegetarian: false, shirtSize: 'L' },
    { id: '2', firstname: 'Jean-Claude', lastname: 'Van Damme', vegetarian: false, shirtSize: 'L' },
    { id: '3', firstname: 'Keanu', lastname: 'Reeves', vegetarian: true, shirtSize: 'S' },
    { id: '4', firstname: 'Steven', lastname: 'Seagal', vegetarian: true, shirtSize: 'M' }
  ],
    

    getAttendees: function() {
      return this.attendees;
    },
    
    getAttendee: function(attendeeId) {
      var dfd = $q.defer();
      this.attendees.forEach(function(attendee) {
        if (attendee.id === attendeeId) dfd.resolve(attendee);
      });

      return dfd.promise;
    }
  }
})