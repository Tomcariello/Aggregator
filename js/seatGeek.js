// get an api from seatGeek
// created Client ID with seatGeek
// Client ID:  NTc3MjcxNHwxNDc0NDk4NTQx
// Secret: u8sVtIcKXsxPJxTrt8WTfkfRLYCvHXjlDMt2TD3W
var currentSeatResult; 
function displaySportInfo(sport,postal_code){
  
  var queryURL = 'https://api.seatgeek.com/2/events?q='+sport+'&postal_code='+postal_code+'&client_id=NTc3MjcxNHwxNDc0NDk4NTQx&client_secret=u8sVtIcKXsxPJxTrt8WTfkfRLYCvHXjlDMt2TD3W';
  $.ajax({
    url:queryURL,
    method:'GET'
  })
  .done(function(response){

    currentSeatResult = response;
    printSportInfo(currentSeatResult);
   
  })
}
function printSportInfo(currentSeatResult){
    // console.log(currentSeatResult.events[0].url);
    if(currentSeatResult.meta.total > 0){
        $('#seatgeek').html("");
        var table = $('<table>');
        $('#seatgeek').append(table);

        newHeader = $('<tr>');
        newHeader.append($("<th>").html("Event:"));
        newHeader.append($("<th>").html("Price low to high"));
        newHeader.append($("<th>").html("Date"));
        table.append(newHeader);

        for (i=0; i<currentSeatResult.meta.total; i++){
          
          newRow = $('<tr>');

          var titleLink = $('<a>').attr('href', currentSeatResult.events[i].url).attr("target", "new").html(currentSeatResult.events[i].short_title);
          var lowestPriceLink = $('<a>').attr('href', currentSeatResult.events[i].url).attr("target", "new").html("$" + currentSeatResult.events[i].stats.lowest_price + ".00-" + currentSeatResult.events[i].stats.highest_price + ".00");
          var datetimeLink = $('<a>').attr('href', currentSeatResult.events[i].url).attr("target", "new").html(currentSeatResult.events[i].datetime_local);

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





