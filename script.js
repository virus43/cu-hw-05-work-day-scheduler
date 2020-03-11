var scheduleObj = {
    09:'test',
    10:'test2'
}

function boxColor(){

    var hours = document.querySelectorAll(".hour");
    var inputs = document.querySelectorAll(".description");
    hours.forEach (function(item,index) {
        if (parseInt(hours[index].getAttribute("data-hour")) <  parseInt(moment().format('H'))){
            inputs[index].className = "col-md-8 description past";};
        if (parseInt(hours[index].getAttribute("data-hour")) === parseInt( moment().format('H'))){
            inputs[index].className = "col-md-8 description present";};
        if (parseInt(hours[index].getAttribute("data-hour")) >  parseInt(moment().format('H'))){
           inputs[index].className = "col-md-8 description future";      };
    });
};

boxColor();

document.addEventListener('click', function(event) {
    // console.log(event.target.parentNode.id);
    if (event.target.nodeName === "BUTTON") {
        console.log(event.target.parentNode.id);
        // localStorage.setItem("9", JSON.stringify(highscoreInitials));
        // localStorage.setItem("9", JSON.stringify(highscoreInitials));
        
    };

});