var url = 'https://crossorigin.me/https://jsonoddsapi.herokuapp.com/sports/MLB'

$.ajax({url: url, method: 'GET'}).done(function(response){
  console.log(response);
});