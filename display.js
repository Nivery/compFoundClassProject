function displayMedia(output_arr) {

    // How many items per shelf
	var shelf_length = 3;
	
	// The shelves
	var das_shelves = [];
	
	var i = 0;
	
	// Set the global current_display array with the value of our output_arr so that
	// search, sort, and filter can work within the current results, whenever that gets implemented
	current_display = output_arr;
	
	// Split up the output_arr based on shelf_length
	// splice removes elements from output_arr and returns an array with the length specified by shelf_length
	while (output_arr.length > 0) {
		das_shelves[i] = output_arr.splice(0,shelf_length);
		i++;
	}
	
	// This is just a place holder so that we have some output. It will need to be replaced eventually.
	document.getElementById('output').innerHTML = '';
	for (var q = 0; q < das_shelves.length; q++) {
		document.getElementById('output').innerHTML += '<hr /><ul>';
		for (var x in das_shelves[q]) {
			document.getElementById('output').innerHTML += '<li class="book_shelf">' + das_shelves[q][x].title + '</li>';
		}
		document.getElementById('output').innerHTML += '</ul>';
	}
}