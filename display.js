function displayMedia(input_arr) {
    var output_arr = input_arr.slice();
	
	// How many items per shelf
	var shelf_length = 3; 
		
	// The shelves
	var das_shelves = []; 
	
	var i = 0;
	
	// Set the global current_display array with the value of our output_arr so that
	// search, sort, and filter can work within the current results, whenever that gets implemented
	current_display = input_arr.slice();
	
	// Split up the output_arr based on shelf_length
	// splice removes elements from output_arr and returns an array with the length specified by shelf_length
	while (output_arr.length > 0) {
		das_shelves[i] = output_arr.splice(0,shelf_length);
		i++;
	}
			
	// This is just a place holder so that we have some output. It will need to be replaced eventually.
    // This also spits out das_shelves[q][x].title is undefined to the error console occassionally.
	document.getElementById('output').innerHTML = '';
	for (var q = 0; q < das_shelves.length; q++) {
        
        console.log("1");
		document.getElementById('output').innerHTML += '<hr /><ul>';
		for (var x = 0; x < shelf_length; x++) {

            temp = das_shelves[q][x]; 
			document.getElementById('output').innerHTML += '<li class="book_shelf">' + '<img src="covers/' + das_shelves[q][x].cover + '" width=200 height=200 onmouseover="displayTitle(' + temp.reference + ');" onclick="onMediaClick(' + temp.reference + ');" /></li>';
		    //document.getElementById('output').innerHTML += '<li class="book_shelf">' + '<img src="covers/' + das_shelves[q][x].cover + '" width=200 height=200 /></li>';
            //document.getElementById('output').innerHTML += '<li class="book_shelf">' + '<img src="covers/' + das_shelves[q][x].cover + '" width=200 height=200 onclick="testShelves();" /></li>';
        }
        document.getElementById('output').innerHTML += '<br>';
        console.log("2");
        for (var x = 0; x < shelf_length; x++) {
            temp = das_shelves[q][x]; 
			document.getElementById('output').innerHTML += '<div class="bookLabel" id="' + temp.reference + '"> </div>';
        }
		document.getElementById('output').innerHTML += '</ul>';
	}
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