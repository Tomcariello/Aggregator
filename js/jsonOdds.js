function getOdds(){
  var url = 'https://crossorigin.me/https://jsonoddsapi.herokuapp.com/odds';

  $.ajax({url: url, method: 'GET'}).done(function(response){
    // change this to handle the response
    console.log(response);
  });
}

function getSportsObject(sport){
  var url = 'https://crossorigin.me/https://jsonoddsapi.herokuapp.com/sports/'+sport;

  $.ajax({url: url, method: 'GET'}).done(function(response){
    // change this to handle the response
    console.log(response);
  });
}

getSportsObject('MLB');

getOdds();

