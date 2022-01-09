currentDay = document.getElementById("#currentDay");
task = document.getElementById("#newtask");
buttonbtn = document.querySelector("#button");
hour = document.querySelector("time");
textarea = document.querySelector("textarea");
present = document.querySelector("#time");
past = document.querySelector("#time");
future = document.querySelector("#time");

var newtask = []

var currentDay = moment().format(); {
$("#currentDay").text(moment().format("dddd, MMMM Do"));
}



var currentTask =  function () { 
    var newtask= 
        newtask = []
        $("textarea#newtask").val(newtask); 
        $(newtask).addClass(task);
        $(task).append(textarea);
        
    }
time = (moment().format("hour", 17)); 
function time() {
    if (hour < time) {
    }
    else if (hour == time) {
    }
    else if (hour > time) {
    }
    time();
}


        
   savetask();


function savetask(newtask) {
JSON.parse(localStorage.getItem(newtask)); 

}




currentTask();
buttonbtn.addEventListener("click", currentTask);
