// This array will be altered by displayMedia(), based on the media array displayMedia() most is showing.
// !!! Use the slice method to make a copy of the array. Standard assigning with arrays basically just gives
// the original array an additional name. I learned this the hard way, when displayMedia() kept devouring
// library_content, current_display, and output_arr because they all referenced the same array (Devouring 
// ouput_arr was planned, not so much with the other two). !!!
var current_display = library_content.slice();

/*Mouseover title information is at the bottom */

function displayMedia(input_arr) {
    var output_arr = input_arr.slice();
	console.log(input_arr);
	// How many items per shelf
	var shelf_length = 5; 
		
	// The shelves
	var das_shelves = []; 
	
	var i = 0;
	
	// Set the global current_display array with the value of our output_arr so that
	// search, sort, and filter can work within the current results
    // This array will be altered by displayMedia(), based on the media array displayMedia() most is showing.
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
    document.getElementById('output').innerHTML += '<ul>';
	for (var q = 0; q < das_shelves.length; q++) {
        
        //console.log(das_shelves[q]);
		//document.getElementById('output').innerHTML += '<hr /><ul>';
		for (var x = 0; x < das_shelves[q].length; x++) {
            
            temp = das_shelves[q][x]; 
            //console.log(temp);
            // This bit of if-else-iness allows us to color-code items based on whether they're borrowed from
            // someone else, or lent to someone else, or *gasp* both. Currently not borrowed and not lent is 
            // black as per main.html CSS, lent is gray (#dcdcdc), borrowed is blue, and borrowed and lent is
            // blue-gray (#b0c4de).
            
            if (temp.in_out === 'out' && temp.on_loan === 'yes') {
                document.getElementById('output').innerHTML += '<div class="book_container"><li class="book_shelf" style="border:2px solid #b0c4de">' + '<img src="covers/' + das_shelves[q][x].cover + '" width=200 height=200 onmouseover="displayTitle(' + temp.reference + ');" onclick="onMediaClick(' + temp.reference + ');" /></li><span class="bookLabel" id="' + temp.reference + '"></div>';
            } else if (temp.in_out === 'out') {
                document.getElementById('output').innerHTML += '<div class="book_container"><li class="book_shelf" style="border:2px solid #dcdcdc">' + '<img src="covers/' + das_shelves[q][x].cover + '" width=200 height=200 onmouseover="displayTitle(' + temp.reference + ');" onclick="onMediaClick(' + temp.reference + ');" /></li><span class="bookLabel" id="' + temp.reference + '"></div>';
            } else if (temp.on_loan === 'no') {
			    document.getElementById('output').innerHTML += '<div class="book_container"><li class="book_shelf">' + '<img src="covers/' + das_shelves[q][x].cover + '" width=200 height=200 onmouseover="displayTitle(' + temp.reference + ');" onclick="onMediaClick(' + temp.reference + ');" /></li><span class="bookLabel" id="' + temp.reference + '"></div>';
		    } else if (temp.on_loan === 'yes') {
                document.getElementById('output').innerHTML += '<div class="book_container"><li class="book_shelf" style="border:2px solid blue">' + '<img src="covers/' + das_shelves[q][x].cover + '" width=200 height=200 onmouseover="displayTitle(' + temp.reference + ');" onclick="onMediaClick(' + temp.reference + ');" /></li><span class="bookLabel" id="' + temp.reference + '"></div>';
		    } else {
                document.getElementById('output').innerHTML += '<div class="book_container"><li class="book_shelf">' + '<img src="covers/' + das_shelves[q][x].cover + '" width=200 height=200 onmouseover="displayTitle(' + temp.reference + ');" onclick="onMediaClick(' + temp.reference + ');" /></li><span class="bookLabel" id="' + temp.reference + '"></div>';
		    }

            //document.getElementById('output').innerHTML += '<li class="book_shelf">' + '<img src="covers/' + das_shelves[q][x].cover + '" width=200 height=200 /></li>';
            //document.getElementById('output').innerHTML += '<li class="book_shelf">' + '<img src="covers/' + das_shelves[q][x].cover + '" width=200 height=200 onclick="testShelves();" /></li>';
        }
        document.getElementById('output').innerHTML += '<br>';
        //console.log("2");
        console.log(das_shelves[q]);
        /*
        for (var x = 0; x < das_shelves[q].length; x++) {
            temp = das_shelves[q][x]; 
            console.log(x);
			document.getElementById('output').innerHTML += '<div class="bookLabel" id="' + temp.reference + '"> </div>';
        }
        */
		//document.getElementById('output').innerHTML += '</ul>';
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