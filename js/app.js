function addListItem () {
	// grab the value of the input field 'new=item'
	// assign the value to a var called 'item'
	var item = $("#new-item").val();
	// find id "theList" and drop the var data into it
	$("#theList").append('<li>'+item+'</li>');
	// clear the input field
	$("#new-item").val('');
}

$(document).ready(function() {
	// input items into list
	// on click run the function addListItem
	$("#add").on('click', addListItem);
});