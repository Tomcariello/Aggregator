// get an api from seatGeek
// created Client ID with seatGeek
// 
// Aggregator
// Client ID:  NTc3MjcxNHwxNDc0NDk4NTQx
// Secret: u8sVtIcKXsxPJxTrt8WTfkfRLYCvHXjlDMt2TD3W
 
function displaySportInfo(sport,postal_code){
  //  var sport = 'soccer';
  // var postal_code = 08540;
  
  var queryURL = 'https://api.seatgeek.com/2/events?q=' + sport + '&client_id=NTc3MjcxNHwxNDc0NDk4NTQx&client_secret=u8sVtIcKXsxPJxTrt8WTfkfRLYCvHXjlDMt2TD3W';
$.ajax({
  url:queryURL,
  method:'GET'
})
$('#seatgeek').html("Search Seatgeek for " + searchTermToSearch + zipCodeToSearch);
console.log(sport);
}






