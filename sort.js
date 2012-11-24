function sortMedia(media_to_sort) {

     var sort_opt = document.getElementById('sort_by').selectedIndex;
 	
	if (sort_opt === 0) {
		//sort by title
		media_to_sort.sort(function(a,b) {var x = a.title.toLowerCase(); var y = b.title.toLowerCase(); return x < y ? -1: x > y ? 1 : 0;});
	} else if (sort_opt === 1) {
		//sort by creator
		// This sort algorithm now assumes that a single author (or the lead author in a multi-author work) has their name arranged
        // thusly: 'Last, First'. Since it splits on a comma and space, any user input function would be wise to provide seperate
        // first name and last name fields and joining them with a comma and space to ensure the split works. This algorithm only
        // sorts by last name so 'Smith, John' could end up before or after 'Smith, Joan' based on their previous order. For multi-author
        // works only the last name of the first author matters for sorting. The full name of corporate authors such as 'Electronic Arts'
        // is used for sorting.
        media_to_sort.sort(function(a,b) {var x = a.creator.toLowerCase().split(', '); var y = b.creator.toLowerCase().split(', '); return x[0] < y[0] ? -1: x[0] > y[0] ? 1 : 0;});
	} else if (sort_opt === 2) {
		//sort by provider
		media_to_sort.sort(function(a,b) {var x = a.provider.toLowerCase(); var y = b.provider.toLowerCase(); return x < y ? -1: x > y ? 1 : 0;});
	} else if (sort_opt === 3) {
		//sort by year
		media_to_sort.sort(function(a,b) {return a.year - b.year;});
	} else if (sort_opt === 4) {
        //sort by media type
        media_to_sort.sort(function(a,b) {var x = a.media.toLowerCase(); var y = b.media.toLowerCase(); return x < y ? -1: x > y ? 1 : 0;});   
	}
	filterMedia(media_to_sort);
}