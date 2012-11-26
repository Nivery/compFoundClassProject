function addName(){
    var output = document.getElementById('output');
    output.innerHTML = "<select id='addType'><option value='book'>Book</option><option value='audiobook'>Audiobook</option><option value='graphic_book'>Graphic Novel</option>";
    output.innerHTML = output.innerHTML + "<option value='ebook'>Ebook</option><option value='video'>Video</option><option value='music'>Music</option><option value='video_game'>Video Game</option><option value='other_game'>Other Games</option></select>";
    
    var typeToAdd = document.getElementById('addType').selectedIndex;
    
    var mediaTypes = [b1, ba1, bg1, be1, v1, m1, p1, g1, gv1];
    
    
}