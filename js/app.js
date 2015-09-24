$(document).ready(function() {
	
	$( "body" ).on( "click", "p", function() {
  		$( this ).after( "<p>I am a paragraph!</p>");
	});
});

function displayVals() {
  var singleValues = $( "#single" ).val();
  var multipleValues = $( "#multiple" ).val() || [];
  $( "p" ).html( "<b>Single:</b> " + singleValues +
    " <b>Multiple:</b> " + multipleValues.join( ", " ) );
}