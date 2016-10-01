// get an api from seatGeek
// created Client ID with seatGeek
// Client ID:  NTc3MjcxNHwxNDc0NDk4NTQx
// Secret: u8sVtIcKXsxPJxTrt8WTfkfRLYCvHXjlDMt2TD3W

// calling a function displaySportInfo 
function displaySportInfo(sport,postal_code){
  // setting seatgeek API for sport and postal code in query url variable.

  //the commented out version includes a ticket range of 100 miles
  var queryURL = 'https://api.seatgeek.com/2/events?q='+sport+'&postal_code='+postal_code+'&range=500mi&client_id=NTc3MjcxNHwxNDc0NDk4NTQx&client_secret=u8sVtIcKXsxPJxTrt8WTfkfRLYCvHXjlDMt2TD3W';

  // Making an ajax get request for the query url to obtain data.
  $.ajax({
    url:queryURL,
    method:'GET'
  })
  // Getting the data from the Query url and storing it in the variable..
  .done(function(response){

    currentSeatResult = response;
    
    //Original function that printed the ticket information independently
    // printSportInfo(currentSeatResult);
  
  })
}
// Defining  the printSportInfo function to append the data in the form of a dynamically created table.
function printSportInfo(currentSeatResult){
    // console.log(currentSeatResult.events[0].url);
    if(currentSeatResult.meta.total > 0){
        $('#seatgeek').html("");
        var table = $('<table>');
        // creating table dynamically into id seatgeek.
        $('#seatgeek').append(table);
        // Storing the value of a dynamically created row in a variable
        var newHeader = $('<tr>');
        // Adding columns under row and pushing data respectively into it.
        newHeader.append($("<th>").html("Event"));
        newHeader.append($("<th>").html("Price"));
        newHeader.append($("<th>").html("Date"));
        newHeader.append($("<th>").html("Time"));
        table.append(newHeader);
        var lowestPrice;
        var highestPrice;
        for (i=0; i<currentSeatResult.meta.total; i++){
              // to remove null values from our price.
             if(currentSeatResult.events[i].stats.lowest_price == null){
              lowestPrice = "";
              highestPrice ="NA";
              }else{
                // storing the value of lowest price in a variable and putting comma after significant 3 digits using toLocaleString function.
                lowestPrice = "$" + (currentSeatResult.events[i].stats.lowest_price).toLocaleString("en") + ".00-";
                // storing the value of highest price in a variable and putting comma after significant 3 digits using toLocaleString function.
                highestPrice = "$" + (currentSeatResult.events[i].stats.highest_price).toLocaleString("en") + ".00";
              }
          // Creating links to the pushed data and storing them under their respective variables.
          var newRow = $('<tr>');
          var titleLink = $('<a>').attr('href', currentSeatResult.events[i].url).attr("target", "new").html(currentSeatResult.events[i].short_title);
          var lowestPriceLink = $('<a>').attr('href', currentSeatResult.events[i].url).attr("target", "new").html( lowestPrice  +  highestPrice );
          // to seperate  date from time, we use split().
          var convertedDateTime = currentSeatResult.events[i].datetime_local.split("T").join(" & ");
          var timeSplit = currentSeatResult.events[i].datetime_local.split("T");
          var date = timeSplit[0];
          // created a variable which stores date in a new Date function
          var d =new Date(date) ;
          var time = timeSplit[1];
          // to remove seconds display from the time.
          var secRemoveTime = time.split("",5);
          var hours =time.split(":");
          // console.log(hours[0]);
          var ampm = "AM"
          // conversion of hours from military time to standard time
          if (hours[0] > 12) {
            hours[0] = hours[0]-12;
            ampm = "PM";
            // console.log(hours[0]);
          }
          // console.log(ampm)
          // to get attribute of date and storing its value in a variable and making it into a link with href attribute.
          // toDateString converts the date into more readable format.
          var dateLink = $('<a>').attr('href', currentSeatResult.events[i].url).attr("target", "new").html(d.toDateString());
          // to get attribute of time and storing its value in a variable and making it into a link with href attribute.
          var timeLink = $('<a>').attr('href', currentSeatResult.events[i].url).attr("target", "new").html(hours[0] + ":" + hours[1] +  ampm);
          // Appending these links to their respective columns.
          newRow.append($("<td>").html(titleLink));
          newRow.append($("<td>").html(lowestPriceLink));
          newRow.append($("<td>").html(dateLink));
          newRow.append($("<td>").html(timeLink));
          table.append(newRow);
          // limiting the results to 9.
          if (i == 9) {
            return false;
          }
        }
    }
}





