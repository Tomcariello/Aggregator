var zipCodeToSearch;
var searchTermToSearch;

$('#submit').on('click', function() {
  console.log("Submit button clicked.");
  zipCodeToSearch = $('#zipCode').val().trim();
  console.log("zip code to search is " + zipCodeToSearch);
  searchTermToSearch = $('#searchTerm').val().trim();
  displaySportInfo(searchTermToSearch,zipCodeToSearch);
  $('#bettingOdds').html("Search JSONOdds for " + searchTermToSearch);
  
})

function checkZipCode(zipCodeToSearch){
  if (zipCodeToSearch.length() == 5) {
    if (parseInt(zipCodeToSearch) == true) {
      return true;
    } else {
      return false;
    }
  }
}

