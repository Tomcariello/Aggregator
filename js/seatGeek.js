// get an api from seatGeek
// created Client ID with seatGeek
// 
// Aggregator
// Client ID:  NTc3MjcxNHwxNDc0NDk4NTQx
// Secret: u8sVtIcKXsxPJxTrt8WTfkfRLYCvHXjlDMt2TD3W
var currentResult; 
function displaySportInfo(sport,postal_code){
  //  var sport = 'soccer';
  // var postal_code = 08540;
  
  var queryURL = 'https://api.seatgeek.com/2/events?q='+sport+'&postal_code='+postal_code+'&client_id=NTc3MjcxNHwxNDc0NDk4NTQx&client_secret=u8sVtIcKXsxPJxTrt8WTfkfRLYCvHXjlDMt2TD3W';
  $.ajax({
    url:queryURL,
    method:'GET'
  })
  .done(function(response){

    currentResult = response;
    printSportInfo(currentResult);
   
  })
}
function printSportInfo(currentResult){

    console.log(currentResult.events[0].url);
    if(currentResult.meta.total > 0){
        $('#seatgeek').html("");
        var table = $('<table>');
        $('#seatgeek').append(table);

        newHeader = $('<tr>');
        newHeader.append($("<th>").html("Event:"));
        newHeader.append($("<th>").html("Price low to high"));
        newHeader.append($("<th>").html("Date"));
        table.append(newHeader);

        for (i=0; i<currentResult.meta.total; i++){
          
          newRow = $('<tr>');

          var titleLink = $('<a>').attr('href', currentResult.events[i].url).attr("target", "new").html(currentResult.events[i].short_title);
          var lowestPriceLink = $('<a>').attr('href', currentResult.events[i].url).attr("target", "new").html("$" + currentResult.events[i].stats.lowest_price + ".00-" + currentResult.events[i].stats.highest_price + ".00");
          var datetimeLink = $('<a>').attr('href', currentResult.events[i].url).attr("target", "new").html(currentResult.events[i].datetime_local);

          newRow.append($("<td>").html(titleLink));
          newRow.append($("<td>").html(lowestPriceLink));
          newRow.append($("<td>").html(datetimeLink));
          table.append(newRow);

          if (i == 9) {
            return false;
          }
    }
  }
}





