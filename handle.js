function handleInput(what_to_do) {
    var array_to_process = [];
	
	// Check whether we're working with all the things or just some of the things
	if (document.getElementById('Current').checked === true) {
		array_to_process = current_display.slice();
	} else {
		array_to_process = library_content.slice();
	}
	// What button did they push? That's what we'll do!
	if (what_to_do === 'search') {
		// search things
		searchMedia(array_to_process);
	} else if (what_to_do === 'sort') {
		//sort things
		sortMedia(array_to_process);
	} else if (what_to_do === 'filter') {
		//filter things
		filterMedia(array_to_process);
	} 
}