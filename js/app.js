//Initialize variables
var zipCodeToSearch;
var searchTermToSearch;
var currentSeatResult; 
var jumboTracker = 0;
var oddsArray;
var displayImages = ["img/jumbotron/cricketgame.jpg", "img/jumbotron/horserace.jpg", "img/jumbotron/mmafight.jpg", "img/jumbotron/nba.jpg", "img/jumbotron/baseball.jpg", "img/jumbotron/ncaab.jpg", "img/jumbotron/ncaaf.jpg", "img/jumbotron/nfl.jpg", "img/jumbotron/nhl.jpg", "img/jumbotron/soccer.jpg", "img/jumbotron/tennismatch.jpg", "img/jumbotron/wnba.jpg"];

var exampleOddsata = ["Texas Rangers", "-1.5", "Tampa Bay Rays", "2016-10-01T00:05:00", "New York Mets", "1.5", "Philadelphia Phillies", "2016-09-30T19:05:00", "Colorado Rockies", "-1.5", "Milwaukee Brewers", "2016-10-01T00:10:00", "Chicago White Sox", "-1.5", "Minnesota Twins", "2016-10-01T00:10:00", "Kansas City Royals", "1.5", "Cleveland Indians", "2016-10-01T00:15:00", "St. Louis Cardinals", "-1.5", "Pittsburgh Pirates", "2016-10-01T00:15:00", "Arizona Diamondbacks", "-1.5", "San Diego Padres", "2016-10-01T01:40:00", "Los Angeles Angels", "1.5", "Houston Astros", "2016-10-01T02:05:00", "Seattle Mariners", "-1.5", "Oakland Athletics", "2016-10-01T02:10:00", "San Francisco Giants", "-1.5", "Los Angeles Dodgers", "2016-10-01T02:15:00", "Cincinnati Reds", "1.5", "Chicago Cubs", "2016-10-01T20:10:00", "Kansas City Royals", "1.5", "Cleveland Indians", "2016-10-01T20:15:00", "Chicago White Sox", "-1.5", "Minnesota Twins", "2016-10-01T23:10:00", "Atlanta Braves", "1.5", "Detroit Tigers", "2016-10-01T23:10:00", "Arizona Diamondbacks", "-1.5", "San Diego Padres", "2016-10-02T00:10:00", "Colorado Rockies", "-1.5", "Milwaukee Brewers", "2016-10-02T00:10:00", "Los Angeles Angels", "1.5", "Houston Astros", "2016-10-02T01:05:00", "+"]
var exampleOddsString = "Arizona Diamondbacks|-1.5|San Diego Padres|2016-10-01T01:40:00|Los Angeles Angels|1.5|Houston Astros|2016-10-01T02:05:00|Seattle Mariners|-1.5|Oakland Athletics|2016-10-01T02:10:00|San Francisco Giants|-1.5|Los Angeles Dodgers|2016-10-01T02:15:00|Cincinnati Reds|1.5|Chicago Cubs|2016-10-01T20:10:00|Kansas City Royals|1.5|Cleveland Indians|2016-10-01T20:15:00|Chicago White Sox|-1.5|Minnesota Twins|2016-10-01T23:10:00|Atlanta Braves|1.5|Detroit Tigers|2016-10-01T23:10:00|Arizona Diamondbacks|-1.5|San Diego Padres|2016-10-02T00:10:00|Colorado Rockies|-1.5|Milwaukee Brewers|2016-10-02T00:10:00|Los Angeles Angels|1.5|Houston Astros|2016-10-02T01:05:00|";
var oddsData; //variable which contains the data converted to an array returned from JSONodds after manipulation to get it into JS

//Set up Jumbotron slideshow
timerTarget = setInterval(function(){
  changeJumbotron();
},10000); 


$('#upBox').on('click', function() {
  $('html, body').animate({
    scrollTop: $("#mainWindow").offset().top
  }, 1000);
})

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

$('#submit').on('click', function() {
  //make sure the results div is hidden/hide results from previous search
  $('#seatgeek').html("");

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

    // $.get('api/jsonOdds.php?action=' + searchTermToSearch, function(data) {
    //   $('#bettingOdds').html(data);
    // });

    $.get('api/jsonOdds_print.php?action=' + searchTermToSearch, function(data) {
      // console.log("trying to print to the hidden div");
      $('#phpDataHere').html("");
      $('#phpDataHere').html(data);
      convertOddsToJSON();
    });
  }

  changeBackground(searchTermToSearch);

  //Animate to the data section
  $('html, body').animate({
    scrollTop: $("#APIData").offset().top
  }, 1000);

});

function changeBackground(sport) {
  // $('#mainWindow').css("background-image", "url(img/" + sport + ".jpg)");  
  $('#APIData').css("background-image", "url(img/" + sport + ".jpg)");  
  $('#APIData').css("display", "inline-block");  
}


function changeJumbotron(){
  $('.intro').css("background-image", "url(" + displayImages[jumboTracker] + ")");
  jumboTracker++;
  if (jumboTracker >= displayImages.length){
    jumboTracker=0;
  }
}

function convertOddsToJSON() {
   var oddsString= $('#phpDataHere').text();
   oddsData = oddsString.split("|");
   console.log(oddsData);
  // oddsData = exampleOddsata; //Use sample data so i don't have to keep pushing to heroku
  printSportAndBettingInfo()

}

function printSportAndBettingInfo() {
    // console.log(currentSeatResult.events[0].url);
    if(currentSeatResult.meta.total > 0){
        $('#seatgeek').html("");
        var table = $('<table>');
        $('#seatgeek').append(table);

        // Storing the value of a dynamically created row in a variable
        var newHeader = $('<tr>');
        // Adding columns under row and pushing data respectively into it.
        newHeader.append($("<th>").html("Event"));
        newHeader.append($("<th>").html("Price"));
        newHeader.append($("<th>").html("Date"));
        newHeader.append($("<th>").html("Time"));
        newHeader.append($("<th>").attr("colspan", "3").html("Betting Odds"));
        table.append(newHeader);
        var lowestPrice;
        var highestPrice;


        for (i=0; i<currentSeatResult.meta.total; i++){
          if (currentSeatResult.events[i].stats.lowest_price == null) {
            lowestPrice = "";
            highestPrice ="NA";
          } else {
            lowestPrice = "$" + (currentSeatResult.events[i].stats.lowest_price).toLocaleString("en") + ".00-";
            highestPrice = "$" + (currentSeatResult.events[i].stats.highest_price).toLocaleString("en") + ".00";
          }

          // Creating links to the pushed data and storing them under their respective variables.
          var newRow = $('<tr>');
          var titleLink = $('<a>').attr('href', currentSeatResult.events[i].url).attr("target", "new").html(currentSeatResult.events[i].short_title);
          var lowestPriceLink = $('<a>').attr('href', currentSeatResult.events[i].url).attr("target", "new").html( lowestPrice  +  highestPrice );
          
          // to seperate  date from time, we use split().
          var convertedDateTime = currentSeatResult.events[i].datetime_local.split("T").join(" & ");
          var timeSplit = currentSeatResult.events[i].datetime_local.split("T");
          var date = timeSplit[0];
          
          // created a variable which stores date in a new Date function
          var d =new Date(date) ;
          var time = timeSplit[1];
          
          // to remove seconds display from the time.
          var secRemoveTime = time.split("",5);
          var hours =time.split(":");
          var ampm = "AM"
          
          // conversion of hours from military time to standard time
          if (hours[0] > 12) {
            hours[0] = hours[0]-12;
            ampm = "PM";
          }

          var dateLink = $('<a>').attr('href', currentSeatResult.events[i].url).attr("target", "new").html(d.toDateString());
          var timeLink = $('<a>').attr('href', currentSeatResult.events[i].url).attr("target", "new").html(hours[0] + ":" + hours[1] +  ampm);

          newRow.append($("<td>").html(titleLink));
          newRow.append($("<td>").html(lowestPriceLink));
          newRow.append($("<td>").html(dateLink));
          newRow.append($("<td>").html(timeLink));

          if (oddsData.length > 3) {
            //See if there is corresponding betting data
            for (j=0; j < oddsData.length-3; j += 4) {
              var seatgeekHomeTeamName = currentSeatResult.events[i].performers[0].name;
              var seatgeekHomeTeamName = currentSeatResult.events[i].performers[0].name;
              var seatgeekGameDate = currentSeatResult.events[i].datetime_utc;
              var matchedOdds = false;
              // console.log("J is " + j + " and oddsData length is " + oddsData.length + " and matchedOdds is " + matchedOdds);

              //From the API...
              //odds date format is: 2016-10-01T23:10:00
              //SG   date format is: 2016-09-30T19:05:00

              if (seatgeekHomeTeamName == oddsData[j] && seatgeekGameDate == oddsData[j + 3]) {
                newRow.append($("<td>").html(oddsData[j]));
                newRow.append($("<td>").html(oddsData[j + 1]));
                newRow.append($("<td>").html(oddsData[j + 2]));
                matchedOdds = true;
                break;
              } else if (j >= oddsData.length - 5 && matchedOdds == false) {
                newRow.append($("<td>").attr("colspan", "3").html("Odds data unavailable."));
              }
            }
          } else {
            newRow.append($("<td>").attr("colspan", "3").html("Odds data unavailable."));
          }
            
          table.append(newRow);

          // limiting the results to 9.
          if (i == 9) {
            return false;
          }
        }
      }
    }
