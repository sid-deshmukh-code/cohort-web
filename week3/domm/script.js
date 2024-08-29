let count = 0
function timer(){
    
    document.querySelectorAll("h4")[1].innerHTML = count;

    if (count <=10) {
        count ++;
        
    } else {
        console.log("done");
        
    }


}

setInterval(timer,2000);
