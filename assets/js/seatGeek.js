// get an api from seatGeek
// created Client ID with seatGeek
// 
// Aggregator
// Client ID:  NTc3MjcxNHwxNDc0NDk4NTQx
// Secret: u8sVtIcKXsxPJxTrt8WTfkfRLYCvHXjlDMt2TD3W
 
function displaySportInfo(sport,postal_code){
   // var sport = soccer;
  // var postal_code = 08540;
  
  var queryURL = 'https://api.seatgeek.com/2/search?q=' + sport + '&'+postal_code + '&client_id=NTc3MjcxNHwxNDc0NDk4NTQx';
$.ajax({
  url:querURL,
  method:'GET'
})
$('#seatgeek').html("Search Seatgeek for " + searchTermToSearch + zipCodeToSearch);

}






