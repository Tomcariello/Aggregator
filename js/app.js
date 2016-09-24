//Initialize variables
var zipCodeToSearch;
var searchTermToSearch;

$('#submit').on('click', function() {

  //obtain zip code
  zipCodeToSearch = $('#zipCode').val().trim();
  //Verify the zip code is a 5 digit numeric value before proceeding
  if (isNaN(zipCodeToSearch) == false && zipCodeToSearch > 0) {
    
    //obtain search term
    searchTermToSearch = $('#searchTerm').val().trim();

    //call seatgeek API with necessary info
    displaySportInfo(searchTermToSearch,zipCodeToSearch);

    //call betting odds API with necessary info
    getSportsObject(searchTermToSearch);

  } else {
    console.log("enter a valid zip code");
  }

})