const divs = document.querySelectorAll(".button");
const body = document.querySelector("body");

divs.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        switch (e.target.id) {
            case "orange":
                body.style.backgroundColor=e.target.id;
                
                break;
            case "grey":
                body.style.backgroundColor=e.target.id;
                
                break;
            case "yellow":
                body.style.backgroundColor=e.target.id;
                
                break;
            case "purple":
                body.style.backgroundColor=e.target.id;
                
                break;
            case "blue":
                body.style.backgroundColor=e.target.id;
                
                break;
            case "aqua":
                body.style.backgroundColor=e.target.id;
                
                break;
        
            default:
                body.style.backgroundColor="white"
                break;
        }
    })
})