// searchMedia() now supports "multi-word terms in double quotes" and terms a user wishes to -exclude
// by prepending such term with a hyphen/minus/negative 
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
		//create an array of search terms by using a custom function (found below) to split the user input string
		search_terms = splitForSearch(document.getElementById('search').value);
	} else {
		return;
	}
	
	var exclude = [];
	var field_to_search = '';
	
	// If a search term is prefaced with a hyphen, add it to the exclude list, otherwise, treat it like a 
	// regular search term.
	for (var i = 0; i < search_terms.length; i++) {
        console.log(i);
		if (search_terms[i].match(/^-/)) {
            // This line of code is amazing...and hideous...and amazing
			exclude.push(new RegExp(search_terms.splice(i,1).join('').substr(1), 'i'));
            // Since the above line removes an item from the array, decrement i or else this will skip terms *sadness!*
            i--;
		} else { 
			search_terms[i] = new RegExp(search_terms[i], 'i');
		}
	}
	//------LOOK FOR STUFF-------
	// For each term in the user's input string, check to see if that term matches any 
	// of the selected properties of every object in the library_content array
	if (search_type === 0) {
		for (var i = 0; i < search_terms.length; i++) {	
			// convert the search term into a regular expression for case-insensitive partial matching
			var term = search_terms[i];
				
			for (var a = 0; a < media_to_search.length; a++) {
				for (x in media_to_search[a]) {
					// exclude object properties from the search that it doesn't really make sense to search
					if (x !== 'in_out' && x !== 'age_group' && x !== 'type' && x !== 'cover' && x !== 'on_loan' && x !== 'reference') {
						if (media_to_search[a][x].match(term)) {
							search_indices.push(a);
						}
					}
				}
			}
			// Remove any matches that include unwanted terms
			if (exclude.length > 0) {
				for (var q = 0; q < exclude.length; q++) {
                    continue_label:
					for (var i = 0; i < search_indices.length; i++) {
						for (var x in media_to_search[search_indices[i]]) {
                            // Have to make sure media_to_search[search_indices[i]][x] isn't undefined or this'll throw an error and crash.
                            if (media_to_search[search_indices[i]][x] !== undefined && x !== 'in_out' && x !== 'age_group' && x !== 'type' && x !== 'cover' && x !== 'on_loan' && x !== 'reference') {
							    if (media_to_search[search_indices[i]][x].match(exclude[q])) {
							    	search_indices.splice(i, 1);
                                    continue continue_label;
							    }
							}
						}
					}
				}
			}
		}
	} else {
	// Search by creator
		if (search_type === 1) {
			field_to_search = 'creator';
		} else if (search_type === 2) {
			field_to_search = 'title';
		} else if (search_type === 3) {
			field_to_search = 'year';
		} else if (search_type === 4) {
			field_to_search = 'tags';
		}
		for (var i = 0; i < search_terms.length; i++) {	
			// convert the search term into a regular expression for case-insensitive partial matching
			var term = search_terms[i];
			for (var a = 0; a < media_to_search.length; a++) {
				if (media_to_search[a][field_to_search].match(term)) {
					search_indices.push(a);	
				}
			}
		}
		if (exclude.length > 0) {
			for (x in exclude) {
				// Check if media_to_search[search_indices[i]] is undefined so as not to throw errors and die
				// If something is on our no-no list, remove it from search results
				if (media_to_search[search_indices[i]] !== undefined && media_to_search[search_indices[i]][field_to_search].match(exclude[x])) {
					search_indices.splice(i, 1);
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
	
	filterMedia(search_results);
}


// This ugly little hand-rolled function allows us to treat a quoted string ("like this one")
// as a single search term rather than multiple search terms. Currently, this function only 
// recognizes double-quoted strings as units because that's easier than adding a bit to parse
// whether a single quote is an apostrophe or quote mark. This behavior may change, if there's time.
// Actually, tested single quotes against 5 search engines. None treated single quotes like double quotes,
// so probably not 'fixing' this since it's industry standard behavior.
//
// If a search string includes an unclosed quotation mark ("quoted string without closing quote) 
// splitForSearch will treat everything after the opening quote as a quoted string. This is either
// an annoying bug or a nifty short-hand depending on your perspective.

function splitForSearch(str_to_split) {
	//split the user's input string into an array of single characters
	var split_arr = str_to_split.split('')
	var temp_arr = [];
	var output_arr = [];
	
	while (split_arr[0] !== undefined) {
		// Until we encounter a space pile add any unquoted words to temp_arr, which will become a string later
		if (split_arr[0].match(/[^"]/)) {
			while (split_arr[0] !== undefined && split_arr[0].match(/[^\s]/)) {
				temp_arr.push(split_arr.shift());
			}
			// Once we encounter a space, dump it out into the ether
			split_arr.shift();
		//pile letters and spaces onto temp_arr to be restringified below
		} else if (split_arr[0].match(/"/)) {
			//dump the opening quote
			split_arr.shift();
			while (split_arr[0] !== undefined && split_arr[0].match(/[^"]/)) {
				temp_arr.push(split_arr.shift());
			}
			//dump the closing quote
			split_arr.shift();
		// Catch any spaces left after a quoted string, this is safer than dumping shifting two elements off
		// split_arr in the quoted-string if because it prevents ("quoted string"term2) to be ['quoted string', 'term2']
		// rather than ['quoted string', 'erm2']. This will also catch any spaces missed through other ways.
		} else if (split_arr[0] !== undefined && split_arr[0].match(/\s/)) {
			split_arr.shift();
		}
		// Turn temp_arr into a string and push it onto the output array if it's not empty
		// Pushing an empty temp_arr onto output_arr will result in a search that matches everything (double-plus ungood)
		if (temp_arr.length > 0) {
			output_arr.push(temp_arr.join(''));
		}
		//Blank out temp array for the next iteration of the loop
		temp_arr = [];
	}
	return output_arr;
}