<?php

// Retrieves sport specified on index.html
$action = $_GET["action"];

// Appends sport selection to API URL
$url = 'https://jsonodds.com/api/odds/' . $action;


if($action=='nba' || $action=='nhl') {
echo 'No odds available. The ' . $action . ' season has not started.';
}
else {
//  Initiate curl
$ch = curl_init($url);
// Disable SSL verification
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
// Will return the response, if false it prints the response
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// Set the url
curl_setopt($ch, CURLOPT_URL,$url);
// Set API Key, Content-Type in Header
curl_setopt($ch,CURLOPT_HTTPHEADER,array('JsonOdds-API-Key: bb90e449-8058-11e6-8199-067e79ca11d3', 'Accept: application/json', 'Content-Type: application/json'));
// Execute
$result=curl_exec($ch);

// Closes CURL
curl_close($ch);

// Decode Json
$data = json_decode($result, true);

//Generate table, table headers
$content = '<table border ="1">';
$content .= '<tr>';
$content .= '<th>Home Team</th>';
// $content .= '<th>Match Time</th>'; 
// $content .= '<th>Money Line Home</th>';
// $content .= '<th>Money Line Away</th>';
$content .= '<th>Point Spread Home</th>';
$content .= '<th>Away Team</th>';
// $content .= '<th>Point Spread Away</th>';
// $content .= '<th>Point Spread Home Line</th>';
// $content .= '<th>Point Spread Away Line</th>';
// $content .= '<th>Total Number</th>';
// $content .= '<th>Over Line</th>';
// $content .= '<th>Under Line</th>';
// $content .= '<th>Draw Line</th>';
// $content .= '<th>Last Updated</th>';
$content .= '</tr>';

// Loop through JSON
  foreach($data as $game) {

    $content.= '<tr><td>';

    $content.= $game['HomeTeam'];
    $content.= '</td>';
    // $content.= '</td><td>';
    // $content.= $game['MatchTime'];

    $content.= '</td>';
  //Loop through nested JSON results under the "Odds" section
    foreach($game['Odds'] as $odds) {
      if($odds['OddType']=='Game') {
          $content.= '<td>';
          // $content.= $odds['MoneyLineHome'];
          // $content.= '</td><td>';
          // $content.= $odds['MoneyLineAway'];
          // $content.= '</td><td>';
          $content.= $odds['PointSpreadHome'];
          // $content.= '</td><td>';
          // $content.= $odds['PointSpreadAway'];
          // $content.= '</td><td>';
          // $content.= $odds['PointSpreadHomeLine'];
          // $content.= '</td><td>';
          // $content.= $odds['PointSpreadAwayLine'];
          // $content.= '</td><td>';
          // $content.= $odds['TotalNumber'];
          // $content.= '</td><td>';
          // $content.= $odds['OverLine'];
          // $content.= '</td><td>';
          // $content.= $odds['UnderLine'];
          // $content.= '</td><td>';
          // $content.= $odds['DrawLine'];
          // $content.= '</td><td>';
          // $content.= $odds['LastUpdated'];

          $content.= '</td>';
      }
    }
    $content.= '<td>';
    $content.= $game['AwayTeam'];
    $content.='</td>';
    
    $content .= '</tr>';
  
  }
// Closes table
$content .= '</table>';

//Echoes results
echo $content;
}
?>