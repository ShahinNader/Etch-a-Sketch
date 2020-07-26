

document.getElementById("size").addEventListener("click",createGrid);

function createGrid (){
    const container = document.getElementById("mainbody");
    var squaresize = document.getElementById("grid").value;
    container.textContent = '';

    container.style.gridTemplateColumns = "repeat(" + squaresize.toString() + " ,1fr)" ;
    container.style.gridTemplateRows = "repeat(" + squaresize.toString() + " ,1fr)" ;

    for (i = 0; i < squaresize*squaresize; i++){
        var newCell = document.createElement("div");
        newCell.className = "cell";
        newCell.addEventListener("mouseover", function(e){
            if(document.getElementById("trail name").checked){
                e.target.style.background = document.getElementById("favcolor").value;
                
                setTimeout(function() {e.target.style.background = "";} , document.getElementById("myRange").value)
            }
            else{
                e.target.style.background = document.getElementById("favcolor").value;
            }
        
        })
        container.appendChild(newCell);}
}
