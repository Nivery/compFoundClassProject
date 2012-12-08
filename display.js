// This array will be altered by displayMedia(), based on the media array displayMedia() is showing.
var current_display = library_content.slice();

/*Mouseover title information is at the bottom */

function displayMedia(input_arr) {
    // Set the global current_display array with the value of our output_arr so that
	// search, sort, and filter can work within the current results
	current_display = input_arr.slice();

	document.getElementById('output').innerHTML = '';
    
    if (input_arr.length === 0) {
        document.getElementById('output').innerHTML = '<p>Sorry, no items matched your criteria. Perhaps it was eaten by gremlins.</p>'
        return;
    }
    
    document.getElementById('output').innerHTML += '<ul>';
	for (var x = 0; x < input_arr.length; x++) { 
		// This bit of if-else-iness allows us to color-code items based on whether they're borrowed from
		// someone else, or lent to someone else, or *gasp* both. Currently not borrowed and not lent is 
		// black as per main.html CSS, lent is gray (#dcdcdc), borrowed is blue, and borrowed and lent is
		// blue-gray (#b0c4de).
		if (input_arr[x].in_out === 'out' && input_arr[x].on_loan === 'yes') {
			document.getElementById('output').innerHTML += '<div class="book_container"><li class="book_shelf" style="border:2px solid #b0c4de">' + '<img src="covers/' + input_arr[x].cover + '" width=200 height=200 onmouseover="displayTitle(' + input_arr[x].reference + ');" onclick="onMediaClick(' + input_arr[x].reference + ');" /></li><span class="bookLabel" id="' + input_arr[x].reference + '"></div>';
		} else if (input_arr[x].in_out === 'out') {
			document.getElementById('output').innerHTML += '<div class="book_container"><li class="book_shelf" style="border:2px solid #dcdcdc">' + '<img src="covers/' + input_arr[x].cover + '" width=200 height=200 onmouseover="displayTitle(' + input_arr[x].reference + ');" onclick="onMediaClick(' + input_arr[x].reference + ');" /></li><span class="bookLabel" id="' + input_arr[x].reference + '"></div>';
		} else if (input_arr[x].on_loan === 'yes') {
			document.getElementById('output').innerHTML += '<div class="book_container"><li class="book_shelf" style="border:2px solid blue">' + '<img src="covers/' + input_arr[x].cover + '" width=200 height=200 onmouseover="displayTitle(' + input_arr[x].reference + ');" onclick="onMediaClick(' + input_arr[x].reference + ');" /></li><span class="bookLabel" id="' + input_arr[x].reference + '"></div>';
		} else {
			document.getElementById('output').innerHTML += '<div class="book_container"><li class="book_shelf">' + '<img src="covers/' + input_arr[x].cover + '" width=200 height=200 onmouseover="displayTitle(' + input_arr[x].reference + ');" onclick="onMediaClick(' + input_arr[x].reference + ');" /></li><span class="bookLabel" id="' + input_arr[x].reference + '"></div>';
		}
	}
    document.getElementById('output').innerHTML += '</ul>';
}


//Handles display and disabling/enabling of filter options
function manageFilterOpts() {
	var filter_opts = document.getElementsByClassName('filter_opts');
	var filter_opts_text = document.getElementsByClassName('opts');
	if (document.getElementById('all').checked === true) {
		for (var i = 0; i < filter_opts.length; i++) {
			filter_opts[i].disabled = true;
			filter_opts_text[i].style.color = 'gray';
		}
	} else {
		for (var i = 0; i < filter_opts.length; i++) {
			filter_opts[i].disabled = false;
			filter_opts_text[i].style.color = 'black';
		}
	}
 }
 
 function displayTitle(obj){
     if (labelTracker == 'start'){
         labelTracker = '';
     }
     else {
         label.innerHTML = '';
     }
     label = document.getElementById(obj.reference);
     label.innerHTML = "" + obj.title;
}