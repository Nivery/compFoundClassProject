// Rearranged this file so that we don't have to write out media objects and then
// remember to add them to the library_content array. Now we can just declare them
// within the array. Also, if we do implement user input, it should be easier to append
// new items onto the end of the array if it's also the end of the file; less fancy
// file editing.

// current_display's global declaration has been moved to the top of display.js since
// displayMedia() is the only function that alters that array

//Temporary global
labelTracker = "start";

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

// This array contains the contents of the library. This array should not be altered 
// by any functions that have to do with searching/sorting/filtering/displaying items
var library_content = [
    b1 = { 
        	cover:'an_ethics_of_interrogation.jpg',
    		title:'An Ethics of Interrogation',
    		subtitle:'',
    		creator:'Skerker, Michael',
    		provider:'University of Chicago Press',
    		year:'2010',
    		type:'Nonfiction',
    		age_group:'Adult',
    		media:'Book',
    		call_number:'',
            tags:'',
    		in_out:'out',
            out_to:'Martha Stewart',
            on_loan:'yes',
            loaned_by:'John Doe',
    		artwork:'',
            reference: 'b1'
    	 },
    b2 = {
    		cover:'javascript.gif',
    		title:'JavaScript: Pocket Reference, 3rd ed.',
    		subtitle:'',
    		creator:'Flanagan, David',
    		provider:'O\'Reilly Media',
    		year:'2012',
    		type:'Nonfiction',
    		age_group:'Adult',
    		media:'Book',
    		call_number:'',
            tags:'',
    		in_out:'in', 
            out_to:'',
            on_loan:'no',
            loaned_by:'',
    		artwork:'',
            reference: 'b2'
    	 },
    b3 = {
            cover:'foucault.jpg',
            title:'Foucault',
            subtitle:'A Very Short Introduction',
            creator:'Gutting, Gary',
            provider:'Oxford University Press',
            year:'2005',
            type:'Nonfiction',
            age_group:'Adult',
            media:'Book',
            call_number:'',
            tags:'post-modernism,philosophy',
            in_out:'in',
            out_to:'',
            on_loan:'no',
            loaned_by:'',
        	artwork:'',
            reference:'b3'
    },
    b4 = {
            cover:'ruth_brown.jpg',
            title:'The Dismissal of Miss Ruth Brown',
            subtitle:'Civil Rights, Censorship, and the American Library',
            creator:'Robbins, Louise S.',
            provider:'University of Oklahoma Press',
            year:'2000',
            type:'Nonfiction',
            age_group:'Adult',
            media:'Book',
            call_number:'',
            tags:'Oklahoma, women\'s history, red scare, civil rights',
            in_out:'in',
            out_to:'',
            on_loan:'no',
            loaned_by:'',
            artwork:'',
            reference:'b4'
    },
    b5 = {
            cover:'MentalFlossHistory.jpg',
            title:'The Mental Floss History of the World',
            subtitle:'An Irreverent Romp Through Civilization\'s Best Bits',
            creator:'Sass, Erik and Steve Wiegand',
            provider:'Harper',
            year:'2008',
            type:'Nonfiction',
            age_group:'Adult',
            media:'Book',
            call_number:'',
            tags:'history, humor',
            in_out:'out',
            out_to:'',
            on_loan:'no',
            loaned_by:'',
            artwork:'',
            reference:'b5'
    },
    b6 = {
            cover:'Bedford.jpg',
            title:'The Bedford Handbook, Eight Edition',
            subtitle:'',
            creator:'Hacker, Diana and Nancy Sommers',
            provider:'Bedford/St. Martin\'s',
            year:'2010',
            type:'Nonfiction',
            age_group:'Adult',
            media:'Book',
            call_number:'',
            tags:'reference, style guide, Chicago Style, MLA Style, APA Style',
            in_out:'in',
            out_to:'',
            on_loan:'no',
            loaned_by:'',
            artwork:'',
            reference:'b6'
    },	 
    ba1 = {
    		cover:'good-book.jpg',
    		title:'The Good Book',
    		subtitle:'The Bizarre, Hilarious, Disturbing, Marvelous, and Inspiring Things I Learned When I Read Every Single Word of the Bible',
    		creator:'Plotz, David',
    		provider:'Harper',
    		year:'2009',
    		type:'Nonfiction',
    		age_group:'Adult',
    		media:'Audio_Book',
    		call_number:'',
            tags:'humor,theology',
    		in_out:'in',
            out_to:'',
            on_loan:'no',
            loaned_by:'',
            reference: 'ba1'
    	  },
    bg1	= {
    		cover:'Scott-Pilgrim1.jpg',
    		title:'Scott Pilgrim\'s Precious Little Life',
    		subtitle:'',
    		creator:'O\'Malley, Bryan Lee',
    		provider:'Oni Press',
    		year:'2004',
    		type:'Fiction',
    		age_group:'Adult',
    		media:'Graphic_Book',
    		call_number:'',
            tags:'manga,Canadian',
    		in_out:'in',
            out_to:'',
            on_loan:'no',
            out_to:'',
    		artwork:'Bryan Lee O\'Malley',
    		volume:'1',
    		issue:'',
            reference: 'bg1'
    	  },
    bg2 = {
        	cover:'lorax.jpg',
    		title:'The Lorax',
    		subtitle:'',
    		creator:'Seuss, Dr.',
    		provider:'Random House',
    		year:'1971',
    		type:'Fiction',
    		age_group:'Children',
    		media:'Book',
    		call_number:'',
            tags:'environmentalism,poetry',
    		in_out:'in',
            out_to:'',
            on_loan:'no',
            loaned_by:'',
    		artwork:'Dr. Seuss',
            reference: 'bg2'
    	 },
    be1 = {
    		cover:'default.jpg',
    		title:'Pride and Prejudice',
    		subtitle:'',
    		creator:'Austen, Jane',
    		provider:'Amazon Digital Services',
    		year:'2012',
    		type:'Fiction',
    		age_group:'Adult',
    		media:'Ebook',
    		call_number:'',
            tags:'British,classic',
    		in_out:'in',
            out_to:'',
            on_loan:'no',
            loaned_by:'',
    		artwork:'',
            reference: 'be1'
    	  },
    v1 = {
    		cover:'hocus_pocus.jpg',
    		title:'Hocus Pocus',
    		subtitle:'',
    		creator:'Ortega, Kenny',
    		provider:'Walt Disney Pictures',
    		year:'1993',
    		type:'Fiction',
    		age_group:'YA',
    		media:'Video',
    		call_number:'',
            tags:'awesome',
    		in_out:'in',
            out_to:'',
            on_loan:'yes',
            loaned_by:'Taco John',
    		writers:'David Kirschner, Mick Garris, Neil Cuthbert',
    		main_cast:'Bette Midler, Sarah Jessica Parker, Kathy Najimy, Omri Katz, Thora Birch, Vinessa Shaw',
            reference: 'v1'
    	 },
    v2 = {
        	cover:'PushingDaisies_S1.jpg',
    		title:'Pushing Daisies',
    		subtitle:'The Complete First Season',
    		creator:'Fuller, Bryan',
    		provider:'Warner Brothers',
    		year:'2008',
    		type:'Fiction',
    		age_group:'Adult',
    		media:'Video',
    		call_number:'',
            tags:'quirky',
    		in_out:'in',
            out_to:'',
            on_loan:'no',
            loaned_by:'',
    		writers:'Bryan Fuller',
    		main_cast:'Lee Pace, Anna Friel, Chi McBride, Kristen Chenowith',
            reference: 'v2'
    	 },
    v3 = {
            cover:'PushingDaisies_S2.jpg',
    		title:'Pushing Daisies',
    		subtitle:'The Complete Second Season',
    		creator:'Fuller, Bryan',
    		provider:'Warner Brothers',
    		year:'2009',
    		type:'Fiction',
    		age_group:'Adult',
    		media:'Video',
    		call_number:'',
            tags:'quirky',
    		in_out:'in',
            out_to:'',
            on_loan:'no',
            loaned_by:'',
    		writers:'Bryan Fuller',
    		main_cast:'Lee Pace, Anna Friel, Chi McBride, Kristen Chenowith',
            reference: 'v3'
    	 },
    v4 = {
            cover:'afewgoodmen.jpg',
    		title:'A Few Good Men',
    		subtitle:'',
    		creator:'Reiner, Rob',
    		provider:'Columbia',
    		year:'1992',
    		type:'Fiction',
    		age_group:'Adult',
    		media:'Video',
    		call_number:'',
            tags:'',
    		in_out:'in',
            out_to:'',
            on_loan:'no',
            loaned_by:'',
    		writers:'Aaron Sorkin',
    		main_cast:'Jack Nicholson, Tom Cruise, Demi Moore, Kevin Bacon, Kiefer Sutherland, Kevin Pollak',
            reference: 'v4'
         },
    v5 = {
            cover:'shortc.jpg',
            title:'Short Circuit',
    		subtitle:'',
    		creator:'Badham, John',
    		provider:'Tri-Star Pictures',
    		year:'1986',
    		type:'Fiction',
    		age_group:'Children',
    		media:'Video',
    		call_number:'',
            tags:'',
    		in_out:'in',
            out_to:'',
            on_loan:'no',
            loaned_by:'',
    		writers:'S.S. Wilson, Brent Maddock',
    		main_cast:'Ally Sheedy, Steve Guttenberg, Fisher Stevens, Tim Blaney',
            reference: 'v5'
    },
    v6 = {
            cover:'TheRef.jpg',
    		title:'The Ref',
    		subtitle:'',
    		creator:'Demme, Ted',
    		provider:'Touchstone',
    		year:'1994',
    		type:'Fiction',
    		age_group:'Adult',
    		media:'Video',
    		call_number:'',
            tags:'Christmas,holiday',
    		in_out:'in',
            out_to:'',
            on_loan:'no',
            loaned_by:'',
    		writers:'Marie Weiss, Richard LaGravenese',
    		main_cast:'Dennis Leary, Kevin Spacey, Judy Davis',
            reference: 'v6'
    	 },
    v7 = {
            cover:'earth.jpg',
    		title:'Earth',
    		subtitle:'The Biography',
    		creator:'Renouf, Jonathan',
    		provider:'BBC',
    		year:'2007',
    		type:'Nonfiction',
    		age_group:'Adult',
    		media:'Video',
    		call_number:'',
            tags:'geology, biology, climatology',
    		in_out:'in',
            out_to:'',
            on_loan:'no',
            loaned_by:'',
    		writers:'',
    		main_cast:'Ian Stewart',
            reference: 'v7'
    	 },
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
            tags:'',
    		in_out:'out',
            out_to:'Borrower McBorrowington',
            on_loan:'no',
            loaned_by:'',
    		line_up:'John Darneille, Jon Wurster, Peter Hughes',
    		track_list:'Amy, aka Spent Gladiator 1 | Lakeside View Apartment Suites | Cry For Judas | Harlem Roulette | White Cedar | Until I Am Whole | Night Light | The Diaz Brothers | Counterfeit Florida Plates | In Memory of Satan | Spent Gladiator 2 | Transcendental Youth',
            reference: 'm1'
    	 },
    p1 = {
    		cover:'Saveur_149.jpg',
    		title:'Saveur',
    		subtitle:'',
    		creator:'Oseland, James',
    		provider:'Bonnier Travel & Epicurean Group',
    		year:'2012',
    		type:'Nonfiction',
    		age_group:'Adult',
    		media:'Periodical',
    		call_number:'',
            tags:'',
    		in_out:'in',
            out_to:'',
            on_loan:'no',
            loaned_by:'',
    		volume:'',
    		issue:'149',
            reference: 'p1'
    	 },
    	 
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
            tags:'',
    		in_out:'in',
            out_to:'',
            on_loan:'no',
            loaned_by:'',
    		format:'Board',
    		genre:'Trivia',
            reference: 'g1'
    },
    
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
            tags:'horror',
    		in_out:'in',
            out_to:'',
            on_loan:'no',
            loaned_by:'',
    		platform:'Wii',
    		genre:'Shooter',
            reference: 'gv1'		
    },
    gv2 = {
            cover:'Mario-Kart-Wii.jpg',
    		title:'Mario Kart',
    		subtitle:'',
    		creator:'Nintendo',
    		provider:'Nintendo',
    		year:'2008',
    		type:'Fiction',
    		age_group:'Children',
    		media:'Videogame',
    		call_number:'',
            tags:'',
    		in_out:'out',
            out_to:'Shabby Thesealion',
            on_loan:'no',
            loaned_by:'',
    		platform:'Wii',
    		genre:'Racer',
            reference: 'gv2'		
    },
    gv3 = {
            cover:'wii-play.jpg',
    		title:'Wii Play',
    		subtitle:'',
    		creator:'Nintendo',
    		provider:'Nintendo',
    		year:'2007',
    		type:'Fiction',
    		age_group:'Adult',
    		media:'Videogame',
    		call_number:'',
            tags:'',
    		in_out:'in',
            out_to:'',
            on_loan:'no',
            loaned_by:'',
    		platform:'Wii',
    		genre:'Sports',
            reference: 'gv3'		
    }
   
    
];

var mediaTypes = [b1, ba1, bg1, be1, v1, m1, p1, g1, gv1];
    
//New items are precreated as empty barring the reference property.  At present, you can only create six.  
 
addedItems = new Array();
ai1  = {
    reference: 'ai1'
}
addedItems.push(ai1);

ai2 = {
    reference: 'ai2'
}
 addedItems.push(ai2);
ai3  = {
    reference: 'ai3'
}
addedItems.push(ai3);

ai4 = {
    reference: 'ai4'
}
 addedItems.push(ai4); 

ai5  = {
    reference: 'ai5'
}
addedItems.push(ai5);
ai6 = {
    reference: 'ai6'
}
 addedItems.push(ai6);

    