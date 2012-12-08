function sortMedia(media_to_sort) {

     var sort_opt = document.getElementById('sort_by').selectedIndex;
 	
	if (sort_opt === 0) {
		//sort by title
		media_to_sort.sort(function(a,b) {var x = a.title.toLowerCase(); var y = b.title.toLowerCase(); return x < y ? -1: x > y ? 1 : 0;});
	} else if (sort_opt === 1) {
		//sort by creator
		// This sort algorithm now assumes that a single author (or the lead author in a multi-author work) has their name arranged
        // thusly: 'Last, First'. 
        media_to_sort.sort(function(a,b) {var x = a.creator.toLowerCase(); var y = b.creator.toLowerCase(); return x < y ? -1: x > y ? 1 : 0;});
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