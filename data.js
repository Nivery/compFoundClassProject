b1 = { 
    	cover:'',
		title:'An Ethics of Interrogation',
		subtitle:'',
		creator:'Michael Skerker',
		provider:'University of Chicago Press',
		year:'2010',
		type:'Nonfiction',
		age_group:'Adult',
		call_number:'',
		in_out:'in',
		artwork:''
	 };
	 
b2 = {
		cover:'',
		title:'JavaScript: Pocket Reference, 3rd ed.',
		subtitle:'',
		creator:'David Flanagan',
		provider:'O\'Reilly Media',
		year:'2012',
		type:'Nonfiction',
		age_group:'Adult',
		call_number:'',
		in_out:'in',
		artwork:''
	 };

b3 = {
		cover:'',
		title:'The Lorax',
		subtitle:'',
		creator:'Dr. Seuss',
		provider:'Random House',
		year:'1971',
		type:'Fiction',
		age_group:'Children',
		call_number:'',
		in_out:'in',
		artwork:'Dr. Seuss'
	 };
ba1 = {
		cover:'',
		title:'The Good Book',
		subtitle:'The Bizarre, Hilarious, Disturbing, Marvelous, and Inspiring Things I Learned When I Read Every Single Word of the Bible',
		creator:'David Plotz',
		provider:'Harper',
		year:'2009',
		type:'Nonfiction',
		age_group:'Adult',
		call_number:'',
		in_out:'in',
	  };
bg1	= {
		cover:'',
		title:'Scott Pilgrim\'s Precious Little Life',
		subtitle:'',
		creator:'Bryan Lee O\'Malley',
		provider:'Oni Press',
		year:'2004',
		type:'Fiction',
		age_group:'Adult',
		call_number:'',
		in_out:'in',
		artwork:'Bryan Lee O\'Malley',
		volume:'1',
		issue:''
	  };
be1 = {
		cover:'',
		title:'Pride and Prejudice',
		subtitle:'',
		creator:'Jane Austen',
		provider:'Amazon Digital Services',
		year:'2012',
		type:'Fiction',
		age_group:'Adult',
		call_number:'',
		in_out:'in',
		artwork:''
	  };
v1 = {
		cover:'',
		title:'Hocus Pocus',
		subtitle:'',
		creator:'Kenny Ortega',
		provider:'Walt Disney Pictures',
		year:'1993',
		type:'Fiction',
		age_group:'YA',
		call_number:'',
		in_out:'in',
		writers:'David Kirschner, Mick Garris, Neil Cuthbert',
		main_cast:'Bette Midler, Sarah Jessica Parker, Kathy Najimy, Omri Katz, Thora Birch, Vinessa Shaw'
	 };
m1 = {
		cover:'',
		title:'Transcendental Youth',
		subtitle:'',
		creator:'The Mountain Goats',
		provider:'Merge Records',
		year:'2012',
		type:'Music',
		age_group:'Adult',
		call_number:'',
		in_out:'in',
		line_up:'John Darneille, Jon Wurster, Peter Hughes',
		track_list:'Amy, aka Spent Gladiator 1 | Lakeside View Apartment Suites | Cry For Judas | Harlem Roulette | White Cedar | Until I Am Whole | Night Light | The Diaz Brothers | Counterfeit Florida Plates | In Memory of Satan | Spent Gladiator 2 | Transcendental Youth'
	 };
p1 = {
		cover:'',
		title:'Saveur',
		subtitle:'',
		creator:'James Oseland',
		provider:'Bonnier Travel & Epicurean Group',
		year:'2012',
		type:'Nonfiction',
		age_group:'Adult',
		call_number:'',
		in_out:'in',
		volume:'',
		issue:'149'
	 };
	 
g1 = {
cover:'',
		title:'Trivial Pursuit',
		subtitle:'Genus 5',
		creator:'Horn Abbot',
		provider:'Hasbro',
		year:'2000',
		type:'Nonfiction',
		age_group:'Adult',
		call_number:'',
		in_out:'in',
		format:'Board',
		genre:'Trivia'
};

gv1 = {
		cover:'',
		title:'Dead Space',
		subtitle:'Extraction',
		creator:'Electronic Arts',
		provider:'Electronic Arts',
		year:'2009',
		type:'Fiction',
		age_group:'Adult',
		call_number:'',
		in_out:'in',
		platform:'Wii',
		genre:'Shooter'
		
};
	 
// Once we have our items set up as objects, we can dump them into an array and use that for searching and sorting
var library_content = [b1,b2,b3,ba1,bg1,be1,v1,m1,p1,g1,gv1];

var current_display = [];