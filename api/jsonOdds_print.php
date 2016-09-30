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

$content = '<p>';

// Loop through JSON
  foreach($data as $game) {

    $content.= $game['HomeTeam'];
    $content.= '%';
    
    foreach($game['Odds'] as $odds) {
      if($odds['OddType']=='Game') {
          $content.= $odds['PointSpreadHome'];
          $content.= '%';
      }
    }
    $content.= $game['AwayTeam'];
    $content.= '%';
    $game['MatchTime'];
    $content.= '|';
  
  }
$content.= '</p>';
//Echoes results
echo $content;
}

?>

