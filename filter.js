// There are two approaches to filtering that I've thought about, permissive and non-permissive filtering.
// In the permissive model checking 'Children' and 'Graphic Book' would return all items that were either
// for children and/or a graphic book. In the respective model the filter would only return items that were 
// graphic books for children. The current model used in filterMedia() is the permissive variety. This approach
// is simpler to implement and probably the more desirable behavior, but I'm open to using the other approach
// or trying to implement both (I think I'd prefer this to chucking permissive filtering entirely).
//
// The one thing I would say against implementing non-pemissive filtering is that anything it can do can already
// be done by filtering current results a couple times.

function filterMedia(media_to_filter) {
    var filter_opts = [];
	var return_arr = [];
	var checked_filters = [];
	
	if (document.getElementById('all').checked === true) {
		displayMedia(media_to_filter);
	} else {
		filter_opts = document.getElementsByClassName('filter_opts');
		for (var i = 0; i < filter_opts.length; i++) {
			if (filter_opts[i].checked === true) {
				checked_filters.push(filter_opts[i].id);
			}
		}
		for (var i = 0; i < media_to_filter.length; i++) {
			if (checked_filters.includes(media_to_filter[i].media) || checked_filters.includes(media_to_filter[i].age_group) || checked_filters.includes(media_to_filter[i].type) || checked_filters.includes(media_to_filter[i].in_out)) {
				return_arr.push(media_to_filter[i]);
			}
		}
		displayMedia(return_arr);
	} 
}	