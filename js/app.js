// functions go here

// test #1, add li's using .val() and .append()

function addListItem () {
	// grab the value of the input field 'new-item'
	// assign the value to a var called 'item'
	var item = $("#new-item").val();
	// find id "theList" and drop the var data into it
	$("#theList").append('<li>'+item+'</li>');
	// clear the input field
	$("#new-item").val('');
}

// test #2

function addToList () {
	// grab the value of the input field 'aNewItem'
	// assign the value to a var called 'item2'
	var item2 = $("#aNewItem").val();
	// find id "theList2" and drop the var data into it
	$("#theList2").append('<tr><td><span class="glyphicon glyphicon-ok"></span></td><td>'+item2+'</td><td><span class="glyphicon glyphicon-minus"></span></td></tr>');
	// clear the input field
	$("#aNewItem").val('');
}


// when page loads jQuery do this shit

$(document).ready(function() {
	// input items into list
	// on click run the function addListItem
	// $("#add").on('click', addListItem);
	// input items into list
	// on click run the function addToList
	$("#add-it").on('click', addToList)
});