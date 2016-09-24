function getSportsObject(sport){
  var url = 'https://crossorigin.me/https://jsonoddsapi.herokuapp.com/sports/'+sport

  $.ajax({url: url, method: 'GET'}).done(function(response){
    return response;
  });
}

getSportsObject('MLB');