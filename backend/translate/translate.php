<?php
require 'vendor/autoload.php';
use Stichoza\GoogleTranslate\TranslateClient;


$tr = new TranslateClient('en', 'hi');

if(isset($_POST["translate"])) {
$text = $_POST['inputsection'];
$tra = $tr->translate($text);

 echo "<p style='margin-top:100px;' id='myspeech'>".$tra."</p>";
}
 ?>
 <!DOCTYPE html>
 <html>
 <head>
 	<title></title>

 </head>
 <body>
  <form method="post">
  	<input type="text" name="inputsection">
  	<input type="submit" name="translate">
  	<p></p>
  </form>

  <script src="http://code.responsivevoice.org/responsivevoice.js"></script>
  <script type="text/javascript">
  	var t = document.getElementById('myspeech').innerHTML;
  	responsiveVoice.speak(t, "Hindi Female");
  </script>
 </body>
 </html>