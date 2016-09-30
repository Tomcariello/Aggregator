//Initialize variables
var zipCodeToSearch;
var searchTermToSearch;
var currentSeatResult; 
var i = 0;
var displayImages = ["img/jumbotron/cricketgame.jpg", "img/jumbotron/horserace.jpg", "img/jumbotron/mmafight.jpg", "img/jumbotron/NBA.jpg", "img/jumbotron/baseball.jpg", "img/jumbotron/NCAAB.jpg", "img/jumbotron/NCAAF.jpg", "img/jumbotron/NFL.jpg", "img/jumbotron/NHL.jpg", "img/jumbotron/soccer.jpg", "img/jumbotron/tennismatch.jpg", "img/jumbotron/wnba.jpg"
];

$('#upBox').on('click', function() {
  $('html, body').animate({
    scrollTop: $("#mainWindow").offset().top
  }, 1000);
  })

$('#submit').on('click', function() {
  // console.log("button clicked");

  //obtain zip code
  zipCodeToSearch = $('#zipCode').val().trim();
  //Verify the zip code is a 5 digit numeric value before proceeding
  if (isNaN(zipCodeToSearch) == false && zipCodeToSearch > 0) {
    
    //obtain search term
    searchTermToSearch = $('#searchTerm').val().trim();

    //convert search term to JSONOdds API friendly terms
    if (searchTermToSearch == "Soccer") {
      searchTermToSearch = "soccer";
    } else if (searchTermToSearch == "NFL Football") {
      searchTermToSearch = "nfl";
    } else if (searchTermToSearch == "NCAA Football") {
      searchTermToSearch = "ncaaf";
    } else if (searchTermToSearch == "NBA Basketball") {
      searchTermToSearch = "nba";
    } else if (searchTermToSearch == "MLB Baseball") {
      searchTermToSearch = "mlb";
    } else if (searchTermToSearch == "NHL Hockey") {
      searchTermToSearch = "nhl";
    } else if (searchTermToSearch == "WNBA Basketball") {
      searchTermToSearch = "wnba";
    } else if (searchTermToSearch == "Cricket") {
      searchTermToSearch = "cricket";
    } else if (searchTermToSearch == "Tennis") {
      searchTermToSearch = "tennis";
    } else if (searchTermToSearch == "Horse Racing") {
      searchTermToSearch = "horse_racing";
    } else if (searchTermToSearch == "Mixed Martial Arts") {
      searchTermToSearch = "mma";
    }

    //call seatgeek API with necessary info
    displaySportInfo(searchTermToSearch,zipCodeToSearch);

    //call betting odds API with necessary info
    // getSportsObject(searchTermToSearch);

    //update page with results from JSON odds API
    // $('#bettingOdds').html("Search JSONOdds for " + searchTermToSearch);

    $.get('api/jsonOdds.php?action=' + searchTermToSearch, function(data) {
      $('#bettingOdds').html(data);
    });

    $.get('api/jsonOdds.php?action=' + searchTermToSearch, function(data) {
      $('phpDataHere').html(data);
    });
  }
  
  changeBackground(searchTermToSearch);

  

  //Animate to the data section
  $('html, body').animate({
    scrollTop: $("#APIData").offset().top
  }, 1000);

});

function checkZipCode(zipCodeToSearch){
  if (zipCodeToSearch.length == 5) {
    if (parseInt(zipCodeToSearch) != NaN) {
      console.log("is a 5 digit number");
      return false;
    }
  } else {
    console.log("enter a valid zip code");
  }

}

function changeBackground(sport) {
  // $('#mainWindow').css("background-image", "url(img/" + sport + ".jpg)");  
  $('#APIData').css("background-image", "url(img/" + sport + ".jpg)");  
  $('#APIData').css("display", "inline-block");  
}


timerTarget = setInterval(function(){
  changeJumbotron();
},10000); 

function changeJumbotron(){
  $('.intro').css("background-image", "url(" + displayImages[i] + ")");
  i++
  if (i >= displayImages.length){
    i=0
  }
}



function printEverything() {
  //pull Seatgeek home team & game start time
  var seatgeekHomeTeamName = currentSeatResult.events[0].performers[0].name;
  var seatgeekGameDate = currentSeatResult.events[0].datetime_local;
  
  //call date conversion function to get something useful.
  convertDate();
  
  console.log(seatgeekHomeTeamName + "|" + seatgeekGameDate);
}

function convertDate(dateToConvert){

}