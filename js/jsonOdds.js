function JSONOdds(searchTerm) {

  var  sports = [];

  var apiKey = "bb90e449-8058-11e6-8199-067e79ca11d3";
  var queryUrl = "https://jsonodds.com/api/odds/";

  $.ajax({
          url: queryUrl,
          method: "Get",
          beforeSend: function(xhr){xhr.setRequestHeader("JsonOdds-API-Key", apiKey);},
        })
        .done(function(response) {
            console.log("does it work", response);

        });
  function showSport(){

        $("#bettingOdds").empty();
    }

    console.log("something")

}