// Search box: #searchTerm
// Zip Code box: #zipCode
// Submit button: #submit
// JSONOdds API Div: #bettingOdds
// SeatGeek API DIV: #seatgeek
var zipCodeToSearch;
var searchTermToSearch;

$('#submit').on('click', function() {
  console.log("Submit button clicked.");
  zipCodeToSearch = $('#zipcode').val();
  searchTermToSearch = $('#searchTerm').val();
  $('#bettingOdds').html("Search JSONOdds for " + searchTermToSearch);
  $('#seatgeek').html("Search Seatgeek for " + searchTermToSearch + zipCodeToSearch);

})