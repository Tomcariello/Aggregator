var  sports = [];

var apiKey = "bb90e449-8058-11e6-8199-067e79ca11d3";
var queryUrl = " " + apiKey;

$.ajax({
        url: queryUrl,
        method: "Get"
      })
      .done(function(response) {


      }
function showSport(){

      $("#odds").empty();
  }