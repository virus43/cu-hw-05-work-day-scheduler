var scheduleObj = []

init();

function init() {
    
    $("#currentDay").text(moment().format('LLLL'));

    var storedSchedule = JSON.parse(localStorage.getItem("scheduleObj"));
    if (storedSchedule !== null) {
        scheduleObj = storedSchedule;
      };
    boxColor();
    renderSchedule();
};

function renderSchedule() {

    for (var i = 0; i < scheduleObj.length; i++) {
        var schedule = scheduleObj[i];

        $("#"+String(i)).find(".description").attr('value', schedule);
    };
};

function storePlan() {

    localStorage.setItem("scheduleObj", JSON.stringify(scheduleObj));
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

document.addEventListener('click', function(event) {

    if (event.target.nodeName === "BUTTON") {
        var index = parseInt(event.target.parentElement.id);
        scheduleObj.splice(parseInt(index), 1,event.target.parentElement.childNodes[3].value);
        storePlan();
    };
    boxColor();
    renderSchedule();

});