function addTitle(selectedIndex, origin){
    
    var output = document.getElementById('output');
    
    //Store old content for back button if came from shelves
    if (origin != 1){
        OldOutput = output.innerHTML; 
    }

        
    if (selectedIndex == undefined){
        selectedIndex = 0;
    }
            
    output.innerHTML = "<select id='addType'><option value='b1'>Book</option><option value='ba1'>Audiobook</option><option value='bg1'>Graphic Novel</option><option value='be1'>Ebook</option><option value='v1'>Video</option><option value='m1'>Music</option><option value='p1'>Periodical</option><option value='vg1'>Video Game</option><option value='g1'>Other Games</option></select>";
    output.innerHTML += "<input type='button' value='Change media type' onclick='updateAddMediaType();'></input>";
    output.innerHTML += "<input type='button' value='Save new item' onclick='saveNewItem();'></input>";
    output.innerHTML += '<button type="button" onclick="restore()">Go back</button>';
        
    modelObj = mediaTypes[selectedIndex];
    
    
    for (modelKey in modelObj){
        output.innerHTML += "<br><em>" + modelKey + ":</em> <input type='text' id='" + modelKey + "'></input>"; 
    }  
    
    
    var addSelectObj = document.getElementById('addType');
    
    addSelectObj.selectedIndex = selectedIndex;
}

function updateAddMediaType(){
     var addSelectObj = document.getElementById('addType');
     
     selectedIndex = addSelectObj.selectedIndex;

     addTitle(selectedIndex, 1);
}

function saveNewItem(){
     
     var addSelectObj = document.getElementById('addType');
    
    selectedIndex = addSelectObj.selectedIndex;
    
    modelObj = mediaTypes[selectedIndex];
    
    tempObj = new Object();
    
    for (modelKey in modelObj){
        tempField = document.getElementById(modelKey);
        tempObj[modelKey] = tempField.value;
    }
    
    console.log(tempObj);
    
    library_content.push(tempObj);
    
    
}