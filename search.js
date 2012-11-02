function searchMedia(media_to_search) {
    // search_terms is an array of terms the user wants to search for. We initialize it here to have it ready.
	var search_terms = [];
	
	var search_type = document.getElementById('search_type').selectedIndex;
	
	// search_indices stores the index number of objects in library_content that match any terms in search_terms
	// Having the index numbers make sorting fun and easy.
	var search_indices = [];

	// count is used to count the number of times search terms appear in each object. It is used by recur
	var count = 1;
	
	// recur is used to keep track of the number of times search terms appear in each object 
	// and is used to rank search results by term frequency in search_results
	var recur = [];
	
	var search_results = [];
	
	// If user input is not empty or only white space, split input at whitespace and assign the resulting terms to search_terms
	// We do this to prevent a user from entering nothing or a space and returning the entire catalog
	if (document.getElementById('search').value !== '' && document.getElementById('search').value.match(/\S/)) {
		search_terms = document.getElementById('search').value.split(/\s+/);
	} else {
		return;
	}
	
	//------LOOK FOR STUFF-------
	// For each term in the user's input string, check to see if that term matches any 
	// of the properties of every object in the library_content array
	if (search_type === 0) {
		for (var i = 0; i < search_terms.length; i++) {	
			// convert the search term into a regular expression for case-insensitive partial matching
			var term = new RegExp(search_terms[i], 'i');
			for (var a = 0; a < media_to_search.length; a++) {
				// This used to be a for each (variable in object) loop. Apparently for each only works in Firefox. This should work everywhere.
				for (x in media_to_search[a]) {
    				if (media_to_search[a][x].match(term)) {
						search_indices.push(a);
					}
				}
			}
		}
	} else if (search_type === 1) {
		for (var i = 0; i < search_terms.length; i++) {	
			// convert the search term into a regular expression for case-insensitive partial matching
			var term = new RegExp(search_terms[i], 'i');
			for (var a = 0; a < media_to_search.length; a++) {
				if (media_to_search[a].creator.match(term)) {
					search_indices.push(a);	
				}
			}
		}
	} else if (search_type === 2) {
		for (var i = 0; i < search_terms.length; i++) {	
			// convert the search term into a regular expression for case-insensitive partial matching
			var term = new RegExp(search_terms[i], 'i');
			for (var a = 0; a < media_to_search.length; a++) {
				if (media_to_search[a].title.match(term)) {
					search_indices.push(a);	
				}
			}
		}
	} else if (search_type === 3) {
		for (var i = 0; i < search_terms.length; i++) {	
			// convert the search term into a regular expression for case-insensitive partial matching
			var term = new RegExp(search_terms[i], 'i');
			for (var a = 0; a < media_to_search.length; a++) {
				if (media_to_search[a].year.match(term)) {
					search_indices.push(a);	
				}
			}
		}
	}
	
	//------RANK SEARCH RESULTS-------
	//Sort the search_indices array so that all occurrences of an index are contiguous
	//The default sort sorts the numbers by their lexical rather than numerical value
	search_indices.sort();
	
	//Set up an array that will track where each index group begins in search_indicies and how many members each group has
	for (var i = 0; i < search_indices.length; i++) {
		//If the current element matches the next one, increment counter to keep track of the number of matching elements
		if (search_indices[i] === search_indices[i + 1]) {
			count++;
		} else {
			// Push an array with two elements into our recur array
			// The first element in the two-part array is index of the first element in a set of one or more matching indices
			// The second element is the number of elements after the index that match it (Should change to end index for slice function?)
			recur.push([i - (count - 1), count]);
			// Reset the counter for the next go around
			count = 1;
		}
	}
	// Sort recur by the number of elements in each index group (aka sort numerically from high to low by the second element in each of recur's sub-arrays)
	recur.sort(function(a,b) {return b[1] - a[1]});
	

	// Prep for output	
	for (var i = 0; i < recur.length; i++) {
		search_results.push(media_to_search[search_indices[recur[i][0]]]);
	}
	
	displayMedia(search_results);
}