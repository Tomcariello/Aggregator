var returnedOdds;
var returnedSports;

function getOdds(){
  var url = 'https://jsonoddsapi.herokuapp.com/odds';

  $.ajax({url: url, method: 'GET'}).done(function(response){
    // change this to handle the response
    console.log("getodds is " + response);
    returnedOdds = response;
    printOdds();
  });
}

function getSportsObject(sport){
  var url = 'https://jsonoddsapi.herokuapp.com/sports/'+sport;

  $.ajax({url: url, method: 'GET'}).done(function(response){
    // change this to handle the response
    console.log("getsportsobject is " + response);
    returnedSports = response;

  });
}

// getSportsObject('MLB');

//What exactly is this doing?
getOdds();

function printOdds(){
  $('#bettingOdds').html("");
  $('#bettingOdds').append(JSON.stringify(returnedSports) + "|" + JSON.stringify(returnedOdds));
}

