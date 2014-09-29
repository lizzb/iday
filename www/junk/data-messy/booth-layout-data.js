  // {  bNum:  1, x: 240, y: 680, room: "Grand Ballroom", floor: 1  },
    
    // bNum is the raw number id - used for label?
    // id is the booth+bNum for use in svg element id's
    // eg bNum: 3, id: "booth3"

var booth_info = [
{  bNum:  1, x: 240, y: 680, room: "Grand Ballroom", floor: 1  }, //  compId: will be assigned in a loop
{  bNum:  2, x: 240, y: 520, room: "Grand Ballroom", floor: 1  },
{  bNum:  3, x: 240, y: 360, room: "Grand Ballroom", floor: 1  },
{  bNum:  4, x: 240, y: 200, room: "Grand Ballroom", floor: 1  },
{  bNum:  5, x: 225, y: 110, rotate: -45, room: "Grand Ballroom", floor: 1  },
{  bNum:  6, x: 345, y:  30, room: "Grand Ballroom", floor: 1  },
{  bNum:  7, x: 460, y:  30, room: "Grand Ballroom", floor: 1  },
{  bNum:  8, x: 575, y:  30, room: "Grand Ballroom", floor: 1  },
{  bNum:  9, x: 690, y:  30, room: "Grand Ballroom", floor: 1  },
{  bNum: 10, x: 805, y:  30, room: "Grand Ballroom", floor: 1  },
{  bNum: 11, x: 920, y:  30, room: "Grand Ballroom", floor: 1  },
{  bNum: 12, x: 1035, y: 30, room: "Grand Ballroom", floor: 1  },
{  bNum: 13, x: 1175, y: 35, rotate: 45, room: "Grand Ballroom", floor: 1  },
{  bNum: 14, x: 1150, y: 145, room: "Grand Ballroom", floor: 1  },
{  bNum: 15, x: 1150, y: 240, room: "Grand Ballroom", floor: 1  },
{  bNum: 16, x: 1150, y: 375, room: "Grand Ballroom", floor: 1  },
{  bNum: 17, x: 1150, y: 470, room: "Grand Ballroom", floor: 1  },
{  bNum: 18, x: 1150, y: 565, room: "Grand Ballroom", floor: 1  },
{  bNum: 19, x: 1150, y: 670, room: "Grand Ballroom", floor: 1  },
{  bNum: 20, x: 1150, y: 785, room: "Grand Ballroom", floor: 1  },
{  bNum: 21, x: 1040, y: 785, room: "Grand Ballroom", floor: 1  },
{  bNum: 22, x: 930, y: 785, room: "Grand Ballroom", floor: 1  },
{  bNum: 23, x: 820, y: 785, room: "Grand Ballroom", floor: 1  },
{  bNum: 24, x: 710, y: 785, room: "Grand Ballroom", floor: 1  },
{  bNum: 25, x: 600, y: 785, room: "Grand Ballroom", floor: 1  },
{  bNum: 26, x: 575, y: 660, room: "Grand Ballroom", floor: 1  },
{  bNum: 27, x: 690, y: 660, room: "Grand Ballroom", floor: 1 },
{  bNum: 28, x: 805, y: 660, room: "Grand Ballroom", floor: 1 },
{  bNum: 29, x: 920, y: 660, room: "Grand Ballroom", floor: 1 },
{  bNum: 30, x: 1035, y: 660, room: "Grand Ballroom", floor: 1 }, 
{  bNum: 31, x: 1035, y: 585, room: "Grand Ballroom", floor: 1 },
{  bNum: 32, x: 920, y: 585, room: "Grand Ballroom", floor: 1 },
{  bNum: 33, x: 805, y: 585, room: "Grand Ballroom", floor: 1 },
{  bNum: 34, x: 690, y: 585, room: "Grand Ballroom", floor: 1 },
{  bNum: 35, x: 575, y: 585, room: "Grand Ballroom", floor: 1 },
{  bNum: 36, x: 575, y: 460, room: "Grand Ballroom", floor: 1 },
{  bNum: 37, x: 690, y: 460, room: "Grand Ballroom", floor: 1 },
{  bNum: 38, x: 805, y: 460, room: "Grand Ballroom", floor: 1 },
{  bNum: 39, x: 920, y: 460, room: "Grand Ballroom", floor: 1 },
{  bNum: 40, x: 1035, y: 460, room: "Grand Ballroom", floor: 1 },
{  bNum: 41, x: 1035, y: 385, room: "Grand Ballroom", floor: 1 },
{  bNum: 42, x: 920, y: 385, room: "Grand Ballroom", floor: 1 },
{  bNum: 43, x: 805, y: 385, room: "Grand Ballroom", floor: 1 },
{  bNum: 44, x: 690, y: 385, room: "Grand Ballroom", floor: 1 },
{  bNum: 45, x: 575, y: 385, room: "Grand Ballroom", floor: 1 },
{  bNum: 46, x: 460, y: 385, room: "Grand Ballroom", floor: 1 },
{  bNum: 47, x: 460, y: 260, room: "Grand Ballroom", floor: 1 },
{  bNum: 48, x: 575, y: 260, room: "Grand Ballroom", floor: 1 },
{  bNum: 49, x: 690, y: 260, room: "Grand Ballroom", floor: 1 },
{  bNum: 50, x: 805, y: 260, room: "Grand Ballroom", floor: 1 },
{  bNum: 51, x: 920, y: 260, room: "Grand Ballroom", floor: 1 },
{  bNum: 52, x: 1035, y: 260, room: "Grand Ballroom", floor: 1 },
{  bNum: 53, x: 1035, y: 185, room: "Grand Ballroom", floor: 1 },
{  bNum: 54, x: 920, y: 185, room: "Grand Ballroom", floor: 1 },
{  bNum: 55, x: 805, y: 185, room: "Grand Ballroom", floor: 1 },
{  bNum: 56, x: 690, y: 185, room: "Grand Ballroom", floor: 1 },
{  bNum: 57, x: 575, y: 185, room: "Grand Ballroom", floor: 1 },
{  bNum: 58, x: 460, y: 185, room: "Grand Ballroom", floor: 1 },

//----------------------------------------------------------------------
//VERTICAL - adjust heritage room y coordinates
//----------------------------------------------------------------------

{  bNum: 59, x: 250+520, y: 490+1200, room: "Heritage Room", floor: 1 },
{  bNum: 60, x: 250+405, y: 490+1200, room: "Heritage Room", floor: 1 },
{  bNum: 61, x: 250+295, y: 490+1200, room: "Heritage Room", floor: 1 },
{  bNum: 62, x: 250+180, y: 490+1200, room: "Heritage Room", floor: 1 },
{  bNum: 63, x:  250+30, y: 490+1200, room: "Heritage Room", floor: 1 },
{  bNum: 64, x:  250+30, y: 370+1200, room: "Heritage Room", floor: 1 },
{  bNum: 65, x:  250+30, y: 270+1200, room: "Heritage Room", floor: 1 },
{  bNum: 66, x:  250+30, y: 155+1200, room: "Heritage Room", floor: 1 },
{  bNum: 67, x:  250+30, y:  30+1200, room: "Heritage Room", floor: 1 },
{  bNum: 68, x: 250+160, y:  30+1200, room: "Heritage Room", floor: 1 },
{  bNum: 69, x: 250+290, y:  30+1200, room: "Heritage Room", floor: 1 },
{  bNum: 70, x: 250+500, y:  30+1200, room: "Heritage Room", floor: 1 },
{  bNum: 71, x: 250+670, y:  30+1200, room: "Heritage Room", floor: 1 },  
{  bNum: 72, x: 250+760, y:  70+1200, room: "Heritage Room", floor: 1 },
{  bNum: 73, x: 250+760, y: 210+1200, room: "Heritage Room", floor: 1 },
{  bNum: 74, x: 250+760, y: 310+1200, room: "Heritage Room", floor: 1 },
{  bNum: 75, x: 250+760, y: 405+1200, room: "Heritage Room", floor: 1 },
{  bNum: 76, x: 250+560, y: 285+1200, room: "Heritage Room", floor: 1 },
{  bNum: 77, x: 250+455, y: 285+1200, room: "Heritage Room", floor: 1 },
{  bNum: 78, x: 250+350, y: 285+1200, room: "Heritage Room", floor: 1 },
{  bNum: 79, x: 250+245, y: 285+1200, room: "Heritage Room", floor: 1 },
{  bNum: 80, x: 250+245, y: 200+1200, room: "Heritage Room", floor: 1 },
{  bNum: 81, x: 250+350, y: 200+1200, room: "Heritage Room", floor: 1 },
{  bNum: 82, x: 250+455, y: 200+1200, room: "Heritage Room", floor: 1 },
{  bNum: 83, x: 250+560, y: 200+1200, room: "Heritage Room", floor: 1 },

];  




  // booth might change, id shouldn't
  // also the room and floor of booth won't change
  // hence lump all the booth information together
  // reference booth number in company object in array
  // access company by unique url identifier
  // nameId --> compId
  // have a separate array for booth info
  // and possibly dynamically changing svg based on search inputs??

  // Considered not having separate room and floor property fields
  // and just rely on an svg position
  // but it seems reasonable that someone might filter by a certain room
  // (or part of a room, perhaps)
  // especially if that room contains a LOT of booths/tables


// this is data about the booths

// can't decide if should be separate from teh svg data or not
// i think it makes sense to keep separate
// probably should pull out room and lfoor info from companies though

  var booths = [
  {"booth":1,"room":"Louis","floor":2},
  {"booth":2,"room":"Louis","floor":2},
  {"booth":3,"room":"Louis","floor":2},
  {"booth":4,"room":"Louis","floor":2},
  {"booth":5,"room":"Louis","floor":2},
  {"booth":6,"room":"Louis","floor":2},
  {"booth":7,"room":"Louis","floor":2},
  {"booth":8,"room":"Louis","floor":2},
  {"booth":9,"room":"Louis","floor":2},
  {"booth":10,"room":"Louis","floor":2},
  {"booth":11,"room":"Louis","floor":2},
  {"booth":12,"room":"Louis","floor":2},
  {"booth":13,"room":"Louis","floor":2},
  {"booth":14,"room":"Louis","floor":2},
  {"booth":15,"room":"Louis","floor":2},
  {"booth":16,"room":"Louis","floor":2},
  {"booth":17,"room":"Louis","floor":2},
  {"booth":18,"room":"Louis","floor":2},
  {"booth":19,"room":"Louis","floor":2},
  {"booth":20,"room":"Louis","floor":2},
  {"booth":21,"room":"Louis","floor":2},
  {"booth":22,"room":"Louis","floor":2},
  {"booth":23,"room":"Louis","floor":2},
  {"booth":24,"room":"Louis","floor":2},
  {"booth":25,"room":"Louis","floor":2},
  {"booth":26,"room":"Louis","floor":2},
  {"booth":27,"room":"Louis","floor":2},
  {"booth":28,"room":"Louis","floor":2},
  {"booth":29,"room":"Louis","floor":2},
  {"booth":30,"room":"Louis","floor":2},
  {"booth":31,"room":"Louis","floor":2},
  {"booth":32,"room":"Louis","floor":2},
  {"booth":33,"room":"Louis","floor":2},
  {"booth":34,"room":"Louis","floor":2},
  {"booth":35,"room":"Louis","floor":2},
  {"booth":36,"room":"Louis","floor":2},
  {"booth":37,"room":"Louis","floor":2},
  {"booth":38,"room":"Louis","floor":2},
  {"booth":39,"room":"Louis","floor":2},
  {"booth":40,"room":"Louis","floor":2},
  {"booth":41,"room":"Louis","floor":2},
  {"booth":42,"room":"Louis","floor":2},
  {"booth":43,"room":"Louis","floor":2},
  {"booth":44,"room":"Louis","floor":2},
  {"booth":45,"room":"Louis","floor":2},
  {"booth":46,"room":"Louis","floor":2},
  {"booth":47,"room":"Louis","floor":2},
  {"booth":48,"room":"Louis","floor":2},
  {"booth":49,"room":"Louis","floor":2},
  {"booth":50,"room":"Louis","floor":2},
  {"booth":51,"room":"Louis","floor":2},
  {"booth":52,"room":"Louis","floor":2},
  {"booth":53,"room":"Louis","floor":2},
  {"booth":54,"room":"Lake","floor":2},
  {"booth":55,"room":"Lake","floor":2},
  {"booth":56,"room":"Lake","floor":2},
  {"booth":57,"room":"Lake","floor":2},
  {"booth":58,"room":"Lake","floor":2},
  {"booth":59,"room":"Lake","floor":2},
  {"booth":60,"room":"Lake","floor":2},
  {"booth":61,"room":"Lake","floor":2},
  {"booth":62,"room":"Lake","floor":2},
  {"booth":63,"room":"Lake","floor":2},
  {"booth":64,"room":"Northwestern","floor":2},
  {"booth":65,"room":"Northwestern","floor":2},
  {"booth":66,"room":"Northwestern","floor":2},
  {"booth":67,"room":"Northwestern","floor":2},
  {"booth":68,"room":"Northwestern","floor":2},
  {"booth":69,"room":"Northwestern","floor":2},
  {"booth":70,"room":"Northwestern","floor":2},
  {"booth":71,"room":"Northwestern","floor":2},
  {"booth":72,"room":"Wildcat Room","floor":1},
  {"booth":73,"room":"Wildcat Room","floor":1},
  {"booth":74,"room":"Wildcat Room","floor":1},
  {"booth":75,"room":"Wildcat Room","floor":1},
  {"booth":76,"room":"Wildcat Room","floor":1},
  {"booth":77,"room":"Wildcat Room","floor":1},
  {"booth":78,"room":"Wildcat Room","floor":1},
  {"booth":79,"room":"Wildcat Room","floor":1},
  {"booth":80,"room":"Big 10","floor":1},
  {"booth":81,"room":"Big 10","floor":1},
  {"booth":82,"room":"Big 10","floor":1},
  {"booth":83,"room":"Big 10","floor":1},
  {"booth":84,"room":"Big 10","floor":1}
  ];



var map_background_info = [
  
  ];

/*
// +1200

<g>
<title> Hilton Orrington Grand Ballroom </title>
<text x="535"  y="-100" class="roomTitle"> Grand Ballroom </text>
<path class="roomOutline"  
        d="
        M 200,10
        l 1040,0
        l 0,900
        l -855,0
        l -72, -35
        l -48, 100
        l -135, -75
        l 65, -105
        l 0,-785
        z" 
  />
  
  <g transform="translate(215, 850)" \>
<g transform="rotate(30,0,0)">
    <text class="bNum" x="30" y="30"> Entrance </text>
  </g>
</g>
  
  <!-- not exactly sure what this square is, on map from tech expo was a yellow box -->
   <g transform="translate(460, 660)">
    <rect class="pillar" x="0" y="0" width="60" height="60"></rect>
    <text class="bNum" x="30" y="30"> Pillar </text>
  </g>

</g>


<g>
<title> Hilton Orrington Heritage Room </title>

</g>





// Hilton Orrington Grand Ballroom </title>
//  <text x="535"  y="-100" class="roomTitle">    Grand Ballroom</text>
// viewBox="100 -200 1200 1200">





   





 Hilton Orrington Heritage Room 
viewBox="-175 -200 1200 850">

*/






/*

   <!-- since first room to display is 1200 by 1200, to have portrait, add 1200 to the y coordinates, to have landscape, add 1200 to the x coordinates

adjust the size of overall viewbox

1200 x 1200 and 1200 x 850

portrait = 1200 x (1200+850)
landscape = (1200+1200) x 1200

but youd also have to rotate all text for landscape....
-->
<hr>

ballroom
viewBox="100 -200 1200 1200">

heritage
viewBox="-175 -200 1200 850">
  


{  bNum: 59, x: 520, y: 490, room: "Heritage Room", floor: 1  },
{  bNum: 60, x: 405, y: 490, room: "Heritage Room", floor: 1  },
{  bNum: 61, x: 295, y: 490, room: "Heritage Room", floor: 1  },
{  bNum: 62, x: 180, y: 490, room: "Heritage Room", floor: 1  },
{  bNum: 63, x:  30, y: 490, room: "Heritage Room", floor: 1  },
{  bNum: 64, x:  30, y: 370, room: "Heritage Room", floor: 1  },
{  bNum: 65, x:  30, y: 270, room: "Heritage Room", floor: 1  },
{  bNum: 66, x:  30, y: 155, room: "Heritage Room", floor: 1  },
{  bNum: 67, x:  30, y:  30, room: "Heritage Room", floor: 1  },
{  bNum: 68, x: 160, y:  30, room: "Heritage Room", floor: 1  },
{  bNum: 69, x: 290, y:  30, room: "Heritage Room", floor: 1  },
{  bNum: 70, x: 500, y:  30, room: "Heritage Room", floor: 1  },
{  bNum: 71, x: 670, y:  30, room: "Heritage Room", floor: 1  },  
{  bNum: 72, x: 760, y:  70, room: "Heritage Room", floor: 1  },
{  bNum: 73, x: 760, y: 210, room: "Heritage Room", floor: 1  },
{  bNum: 74, x: 760, y: 310, room: "Heritage Room", floor: 1  },
{  bNum: 75, x: 760, y: 405, room: "Heritage Room", floor: 1  },
{  bNum: 76, x: 560, y: 285, room: "Heritage Room", floor: 1  },
{  bNum: 77, x: 455, y: 285, room: "Heritage Room", floor: 1  },
{  bNum: 78, x: 350, y: 285, room: "Heritage Room", floor: 1  },
{  bNum: 79, x: 245, y: 285, room: "Heritage Room", floor: 1  },
{  bNum: 80, x: 245, y: 200, room: "Heritage Room", floor: 1  },
{  bNum: 81, x: 350, y: 200, room: "Heritage Room", floor: 1  },
{  bNum: 82, x: 455, y: 200, room: "Heritage Room", floor: 1  },
{  bNum: 83, x: 560, y: 200, room: "Heritage Room", floor: 1  },





----------------------------------------------------------------------
HORIZONTAL - adjust heritage
----------------------------------------------------------------------
{  bNum: 59, x: 1200+520, y: 490, room: "Heritage Room", floor: 1  },
{  bNum: 60, x: 1200+405, y: 490, room: "Heritage Room", floor: 1  },
{  bNum: 61, x: 1200+295, y: 490, room: "Heritage Room", floor: 1  },
{  bNum: 62, x: 1200+180, y: 490, room: "Heritage Room", floor: 1  },
{  bNum: 63, x: 1200+ 30, y: 490, room: "Heritage Room", floor: 1  },
{  bNum: 64, x: 1200+ 30, y: 370, room: "Heritage Room", floor: 1  },
{  bNum: 65, x: 1200+ 30, y: 270, room: "Heritage Room", floor: 1  },
{  bNum: 66, x: 1200+ 30, y: 155, room: "Heritage Room", floor: 1  },
{  bNum: 67, x: 1200+ 30, y:  30, room: "Heritage Room", floor: 1  },
{  bNum: 68, x: 1200+160, y:  30, room: "Heritage Room", floor: 1  },
{  bNum: 69, x: 1200+290, y:  30, room: "Heritage Room", floor: 1  },
{  bNum: 70, x: 1200+500, y:  30, room: "Heritage Room", floor: 1  },
{  bNum: 71, x: 1200+670, y:  30, room: "Heritage Room", floor: 1  },  
{  bNum: 72, x: 1200+760, y:  70, room: "Heritage Room", floor: 1  },
{  bNum: 73, x: 1200+760, y: 210, room: "Heritage Room", floor: 1  },
{  bNum: 74, x: 1200+760, y: 310, room: "Heritage Room", floor: 1  },
{  bNum: 75, x: 1200+760, y: 405, room: "Heritage Room", floor: 1  },
{  bNum: 76, x: 1200+560, y: 285, room: "Heritage Room", floor: 1  },
{  bNum: 77, x: 1200+455, y: 285, room: "Heritage Room", floor: 1  },
{  bNum: 78, x: 1200+350, y: 285, room: "Heritage Room", floor: 1  },
{  bNum: 79, x: 1200+245, y: 285, room: "Heritage Room", floor: 1  },
{  bNum: 80, x: 1200+245, y: 200, room: "Heritage Room", floor: 1  },
{  bNum: 81, x: 1200+350, y: 200, room: "Heritage Room", floor: 1  },
{  bNum: 82, x: 1200+455, y: 200, room: "Heritage Room", floor: 1  },
{  bNum: 83, x: 1200+560, y: 200, room: "Heritage Room", floor: 1  },
*/
