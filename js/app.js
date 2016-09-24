//Initialize variables
var zipCodeToSearch;
var searchTermToSearch;

$('#submit').on('click', function() {

  //obtain zip code and verify that it is a 5 digit numeric value
  zipCodeToSearch = $('#zipCode').val().trim();
  checkZipCode(zipCodeToSearch);

  //obtain search term
  searchTermToSearch = $('#searchTerm').val().trim();

  //call seatgeek API with info
  displaySportInfo(searchTermToSearch,zipCodeToSearch);

  //call betting odds API with info
  // BETTINGODDS(searchTermToSearch,zipCodeToSearch);

  //update page with results from JSON odds API
  $('#bettingOdds').html("Search JSONOdds for " + searchTermToSearch);
  
})

function checkZipCode(zipCodeToSearch){
  if (zipCodeToSearch.length == 5) {
    if (parseInt(zipCodeToSearch) != NaN) {
      console.log("is a 5 digit number");
      return false;
    }
  } else {
      console.log("is not a 5 digit number");
  }
}

