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
	$("#theList2").append('<tr><td><input type="checkbox" class="purchased"></td><td>'+item2+'</td><td><input type="submit" value="remove" class="removeIt" /></td></tr>');
	// clear the input field
	$("#aNewItem").val('');

}

function removeItem () {
	// alert("hello");
	$(this).closest("tr").remove();
}

function purchasedItem () {
	// $(this).closest("tr").css("backgroundColor", "#AACCFF");

	if ($(this).closest("tr").css('textDecoration') === 'line-through') {
		$(this).closest("tr").css({backgroundColor: "transparent", textDecoration: "none"});
		} 
		else
			{
		$(this).closest("tr").css({backgroundColor: "#C77844", textDecoration: "line-through"});
	};
}


// when page loads jQuery do this

$(document).ready(function() {
	// input items into list
	// on click run the function addToList
	$("#add-it").on('click', addToList);
	// delete an item
	$(document).on('click','.removeIt', removeItem);
	// check an item off the list. if checked, uncheck it
	$(document).on('click','.purchased', purchasedItem);
});