window.addEventListener("load", () => window.scroll(0, 0));

let mainCoords = document.getElementById('main').getBoundingClientRect();
    
document.getElementById("presentation__container")
        .addEventListener("click", 
            () => window.scrollBy({top:mainCoords.y, behavior:"smooth"}))