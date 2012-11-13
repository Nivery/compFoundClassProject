//Temporary global
labelTracker = "start";

b1 = { 
    	cover:'an_ethics_of_interrogation.jpg',
		title:'An Ethics of Interrogation',
		subtitle:'',
		creator:'Michael Skerker',
		provider:'University of Chicago Press',
		year:'2010',
		type:'Nonfiction',
		age_group:'Adult',
		media:'Book',
		call_number:'',
		in_out:'in',
		artwork:'',
        reference: 'b1'
	 };
	 
b2 = {
		cover:'an_ethics_of_interrogation.jpg',
		title:'JavaScript: Pocket Reference, 3rd ed.',
		subtitle:'',
		creator:'David Flanagan',
		provider:'O\'Reilly Media',
		year:'2012',
		type:'Nonfiction',
		age_group:'Adult',
		media:'Book',
		call_number:'',
		in_out:'in',
		artwork:'',
        reference: 'b2'
	 };

b3 = {
		cover:'an_ethics_of_interrogation.jpg',
		title:'The Lorax',
		subtitle:'',
		creator:'Dr. Seuss',
		provider:'Random House',
		year:'1971',
		type:'Fiction',
		age_group:'Children',
		media:'Book',
		call_number:'',
		in_out:'in',
		artwork:'Dr. Seuss',
        reference: 'b3'
	 };
	 
ba1 = {
		cover:'an_ethics_of_interrogation.jpg',
		title:'The Good Book',
		subtitle:'The Bizarre, Hilarious, Disturbing, Marvelous, and Inspiring Things I Learned When I Read Every Single Word of the Bible',
		creator:'David Plotz',
		provider:'Harper',
		year:'2009',
		type:'Nonfiction',
		age_group:'Adult',
		media:'Audio_Book',
		call_number:'',
		in_out:'in',
        reference: 'ba1'
	  };
bg1	= {
		cover:'an_ethics_of_interrogation.jpg',
		title:'Scott Pilgrim\'s Precious Little Life',
		subtitle:'',
		creator:'Bryan Lee O\'Malley',
		provider:'Oni Press',
		year:'2004',
		type:'Fiction',
		age_group:'Adult',
		media:'Graphic_Book',
		call_number:'',
		in_out:'in',
		artwork:'Bryan Lee O\'Malley',
		volume:'1',
		issue:'',
        reference: 'bg1'
	  };
be1 = {
		cover:'an_ethics_of_interrogation.jpg',
		title:'Pride and Prejudice',
		subtitle:'',
		creator:'Jane Austen',
		provider:'Amazon Digital Services',
		year:'2012',
		type:'Fiction',
		age_group:'Adult',
		media:'Ebook',
		call_number:'',
		in_out:'in',
		artwork:'',
        reference: 'be1'
	  };
v1 = {
		cover:'hocus_pocus.jpg',
		title:'Hocus Pocus',
		subtitle:'',
		creator:'Kenny Ortega',
		provider:'Walt Disney Pictures',
		year:'1993',
		type:'Fiction',
		age_group:'YA',
		media:'Video',
		call_number:'',
		in_out:'in',
		writers:'David Kirschner, Mick Garris, Neil Cuthbert',
		main_cast:'Bette Midler, Sarah Jessica Parker, Kathy Najimy, Omri Katz, Thora Birch, Vinessa Shaw',
        reference: 'v1'
	 };
m1 = {
		cover:'transcendental_youth.jpg',
		title:'Transcendental Youth',
		subtitle:'',
		creator:'The Mountain Goats',
		provider:'Merge Records',
		year:'2012',
		type:'Music',
		age_group:'Adult',
		media:'Music',
		call_number:'',
		in_out:'in',
		line_up:'John Darneille, Jon Wurster, Peter Hughes',
		track_list:'Amy, aka Spent Gladiator 1 | Lakeside View Apartment Suites | Cry For Judas | Harlem Roulette | White Cedar | Until I Am Whole | Night Light | The Diaz Brothers | Counterfeit Florida Plates | In Memory of Satan | Spent Gladiator 2 | Transcendental Youth',
        reference: 'm1'
	 };
p1 = {
		cover:'an_ethics_of_interrogation.jpg',
		title:'Saveur',
		subtitle:'',
		creator:'James Oseland',
		provider:'Bonnier Travel & Epicurean Group',
		year:'2012',
		type:'Nonfiction',
		age_group:'Adult',
		media:'Periodical',
		call_number:'',
		in_out:'in',
		volume:'',
		issue:'149',
        reference: 'p1'
	 };
	 
g1 = {
		cover:'trivial_pursuit.jpg',
		title:'Trivial Pursuit',
		subtitle:'Genus 5',
		creator:'Horn Abbot',
		provider:'Hasbro',
		year:'2000',
		type:'Nonfiction',
		age_group:'Adult',
		media:'Game',
		call_number:'',
		in_out:'in',
		format:'Board',
		genre:'Trivia',
        reference: 'g1'
};

gv1 = {
		cover:'dead_space_extraction.jpg',
		title:'Dead Space',
		subtitle:'Extraction',
		creator:'Electronic Arts',
		provider:'Electronic Arts',
		year:'2009',
		type:'Fiction',
		age_group:'Adult',
		media:'Videogame',
		call_number:'',
		in_out:'in',
		platform:'Wii',
		genre:'Shooter',
        reference: 'gv1'		
};
	 
// Once we have our items set up as objects, we can dump them into an array and use that for searching and sorting
// This array should not be altered by any functions that have to do with searching/sorting/filtering/displaying the library
var library_content = [b1,b2,b3,ba1,bg1,be1,v1,m1,p1,g1,gv1];

// This array will be altered by displayMedia(), based on the media array displayMedia() most is showing.
// !!! Use the slice method to make a copy of the array. Standard assigning with arrays basically just gives
// the original array an additional name. I learned this the hard way, when displayMedia() kept devouring
// library_content, current_display, and output_arr because they all referenced the same array (Devouring 
// ouput_arr was planned, not so much with the other two). !!!
var current_display = library_content.slice();

// Add a method to the Array object to check to see if the array contains a particular element, 
// because JavaScript is too dumb to do this itself, this method is used in filterMedia()
Array.prototype.includes = function(obj) {
    for (var i = 0; i < this.length; i++) {
		if (this[i] === obj) {
			return true;
		}
	}
	return false;
}

