function sortMedia(media_to_sort) {
     var sort_opt = document.getElementById('sort_by').selectedIndex;
	if (sort_opt === 0) {
		//sort by title
		media_to_sort.sort(function(a,b) {var x = a.title.toLowerCase(); var y = b.title.toLowerCase(); return x < y ? -1: x > y ? 1 : 0;});
	} else if (sort_opt === 1) {
		//sort by creator
		// This sorts by last name (good), but when the 'author' is an organization it sorts by the last word in the
		// organization's name (less good). We could probably fix this if our user input page allows the user to clarify
		// whether an author is a person or an organization so that we could presume 'Flanagan, David' for people and
		// 'Electronic Arts' for organizations. Perhaps it's a tolerable quirk.
		// 
		// This sort would also arrange by the last name of the last author if given multiple authors
		media_to_sort.sort(function(a,b) {var x = a.creator.toLowerCase().split(' '); var y = b.creator.toLowerCase().split(' '); return x[x.length - 1] < y[y.length - 1] ? -1: x[x.length - 1] > y[y.length - 1] ? 1 : 0;});
	} else if (sort_opt === 2) {
		//sort by provider
		media_to_sort.sort(function(a,b) {var x = a.provider.toLowerCase(); var y = b.provider.toLowerCase(); return x < y ? -1: x > y ? 1 : 0;});
	} else if (sort_opt === 3) {
		//sort by year
		media_to_sort.sort(function(a,b) {return a.year - b.year;});
	}
	displayMedia(media_to_sort);
}