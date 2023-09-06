var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// create a new Date object
var d = new Date();

// call the displayDate() function
displayDate();

function displayDate() {
    // todo: display the current date in the todaysdate div
    todayDate.innerHTML  = d;
    todayDate.innerHTML = d.toDateString ();
}

function displayActivity() {
var dayOfWeek = d.getDay () ;
var youShould;
switch (dayOfWeek) {
case 0 :
youShould = "Take it easy! You have earned it!";
break;
case 1 :
youShould = " You should visit your friend!";
break;
case 2 :
youShould = "drink water";
break;
case 3 :
youShould = "eat!" ;
break;
case 4 :
youShould = "go on jog!";
break;
case 5 :
youShould ="yoga!!" ;
break;
case 6 :
youShould ="meditate!!!!!" ;
break;
default :
youShould ="Hmmm. Something is going wrong...";
break;
}
document.getElementById("thingToDo").innerHTML = youShould
    // todo: find out the day of the week.

    /* todo: set a variable, called youShould, with a different
       string based on what day of the week it is. */
    
    // todo: output the value of youShould into the thingToDo div
}