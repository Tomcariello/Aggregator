var zipCodeToSearch;
var searchTermToSearch;

$('#submit').on('click', function() {
  console.log("Submit button clicked.");
  zipCodeToSearch = $('#zipCode').val().trim();
  checkZipCode(zipCodeToSearch);
  searchTermToSearch = $('#searchTerm').val().trim();
  displaySportInfo(searchTermToSearch,zipCodeToSearch);
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

