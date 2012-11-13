/*The onMediaClick function should save the current contents of #output into a variable, then replace it with the details for a particular book.  
Upon clicking back, the user gets his/her old output.  editEntry allows  users to make changes to an object's data.  saveEntry saves an entry. */

function onMediaClick(MediaItem, origin){
    

    
    output = document.getElementById('output');
    
    
    //Store old content for back button if came from shelves
    if (origin != 1){
        OldOutput = output.innerHTML; 
    }
    
    //Clear existing content, begin list
    output.innerHTML = '<ul>';
    
    //Don't display these properties
    noDisplayProperties = ['reference', 'cover'];
    
    
    for (var prop in MediaItem) {
      if (!noDisplayProperties.includes(prop)){
        output.innerHTML += "<li><em>" + prop + ":</em> " + MediaItem[prop] + "<br></li>";
      }
    }
   
   output.innerHTML += "<br><br>";
    
   output.innerHTML += '<button type="button" onclick="restore()">Go back</button>';
  
   //Was having trouble passing parameters without doing this
   mediaItem = MediaItem;
  
   output.innerHTML += '<button type="button" onclick="editEntry(' + 'mediaItem' + ');">Edit entry</button>';
}

//Returns page to state before media click
function restore(){
    output.innerHTML = OldOutput; 
}

//Ignore
function testShelves(){
        for (var q = 0; q < das_shelves.length; q++) {
		    for (var x = 0; x < shelf_length; x++) {
                console.log(das_shelves[q][x]);
		    }
        }
                
}

function editEntry(MediaItem){
    

    //Clear existing content
    output.innerHTML = '';
    
    for (var prop in MediaItem) {
      if (!noDisplayProperties.includes(prop)){
        output.innerHTML += "<em>" + prop + ":</em> " + '<input type="text" id="' + prop + '" value="' + MediaItem[prop] + '"</input><br>';
      }
    }
    
    mediaItem = MediaItem;
    
    output.innerHTML += '<button type="button" onclick="restore()">Go back</button>';
    output.innerHTML += '<button type="button" onclick="saveEntry(mediaItem)">Save entry</button>';
    
}

function saveEntry(MediaItem){
    

    
    for (var prop in MediaItem) {     
        
      if (!noDisplayProperties.includes(prop)){          
        console.log(prop.toString());
        temp = document.getElementById(prop);
        console.log(temp);
        tempValue = temp.value;
            if (tempValue != MediaItem[prop]){
                MediaItem[prop] = tempValue;
            }
      }
      
  
    }
    
    mediaItem = MediaItem  
    
    onMediaClick(mediaItem, 1); 
    
}