/*This function should save the current contents of #output into a variable, then replace it with the details for a particular book.  
Upon clicking back, the user gets his/her old output. */

function onMediaClick(MediaItem){
    
    //Debugging statement
    //console.log("onMediaClick called");
   // console.log(MediaItem);
    
    output = document.getElementById('output');
    
    //Store old content for back button
    OldOutput = output.innerHTML; 
    
    //Clear existing content
    output.innerHTML = '';
    
    noDisplayProperties = ['reference', 'cover'];
    
    
    for (var prop in MediaItem) {
      if (!noDisplayProperties.includes(prop)){
        output.innerHTML += "" + prop + ": " + MediaItem[prop] + "<br>";
      }
    }
   
   output.innerHTML += "<br><br>";
    
    output.innerHTML += '<button type="button" onclick="restore()">Go back</button>';
}

function restore(){
    output.innerHTML = OldOutput; 
}

function testShelves(){
        for (var q = 0; q < das_shelves.length; q++) {
		    for (var x = 0; x < shelf_length; x++) {
                console.log(das_shelves[q][x]);
		    }
        }
                
}