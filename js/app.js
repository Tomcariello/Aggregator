var zipCodeToSearch;
var searchTermToSearch;

$('#submit').on('click', function() {
  console.log("Submit button clicked.");
  zipCodeToSearch = $('#zipCode').val().trim;
  var zipCodeStatus = checkZipCode(zipCodeToSearch);
  console.log("zip code status is " + zipCodeStatus);
  searchTermToSearch = $('#searchTerm').val().trim();
  displaySportInfo(searchTermToSearch,zipCodeToSearch);
  $('#bettingOdds').html("Search JSONOdds for " + searchTermToSearch);
  
})

function checkZipCode(zipStringToTest){
  var parsedZip = parseInt(zipStringToTest);
  console.log(/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(parsedZip));
}

