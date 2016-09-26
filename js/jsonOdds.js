var returnedOdds;
var returnedSports;
var currentResult;

function getOdds(odds){
  var url = 'http://cors.io/?https://jsonoddsapi.herokuapp.com/odds';

  $.ajax({url: url, method: 'GET'}).done(function(response){
    // change this to handle the response
    console.log("getodds is " + response);
    returnedOdds = response;
  })
    .done(function(response){
    currentResult = response;
    getOdds(currentResult);
    console.log('it works')
  })
}

function getSportsObject(sport){
    var url = 'http://cors.io/?https://jsonoddsapi.herokuapp.com/sports/'+sport;

  $.ajax({url: url, method: 'GET'}).done(function(response){
    // change this to handle the response
    returnedSports = response;
  })
    .done(function(response){
    currentResult = response;
    getSportsObject(currentResult);
    console.log('it still works')
  })
}

function printOdds(){
  $('#bettingOdds').html("");

  var table = $('<table>');
  $('#bettingOdds').append(table);

  for (var i=0; i<currentResult; i++) {
  newSection = $('<td>');

  var homeOdds = $('<tr>').attr(currentResult[i]).html(currentResult[i].pointSpreadHome).val().trim();
  var awayOdds = $('<tr>').attr(currentResult[i]).html(currentResult[i].pointSpreadAway).val().trim();

  $('#bettingOdds').append(JSON.stringify(returnedSports) + "|" + JSON.stringify(returnedOdds));
  }
}
