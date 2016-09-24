// var  sports = [];

// var apiKey = "bb90e449-8058-11e6-8199-067e79ca11d3";
// var queryUrl = "https://jsonodds.com/api/odds/";

// $.ajax({
//         url: queryUrl,
//         method: "Get",
//         beforeSend: function(xhr){xhr.setRequestHeader("jsonodds-api-key", apiKey)},
//       })
//       .done(function(response) {
//           console.log("does it work", response);

//       });
// function showSport(){

//       $("#bettingOdds").empty();
//   }

//   console.log("something")
//   
//   
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://crossorigin.me/https://jsonodds.com/api/odds/",
  "method": "GET",
  "headers": {
    "jsonodds-api-key": "bb90e449-8058-11e6-8199-067e79ca11d3",
    "cache-control": "no-cache",
    "postman-token": "f111c2e1-cfdd-7884-b714-a9d3d48dd37c"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});