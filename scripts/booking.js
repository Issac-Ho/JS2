/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costPerDay = 35; 
var numberOfDaysSelected = 0;
var totalCost = 0;
let calculatedCost = document.querySelector('#calculated-cost');
let clearButton = document.getElementById('clear-button');
let halfButton = document.getElementById('half');
let fullButton = document.getElementById('full');
let mondayButton = document.getElementById("monday");
let tuesdayButton = document.getElementById("tuesday");
let wednesdayButton = document.getElementById("wednesday");
let thursdayButton = document.getElementById("thursday");
let fridayButton = document.getElementById("friday");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function monday() {
    if (!mondayButton.classList.contains('clicked')) {
        mondayButton.classList.add('clicked');
        numberOfDaysSelected++;
        calculate();
    }
}
mondayButton.addEventListener("click", monday);

function tuesday() {
if (!tuesdayButton.classList.contains('clicked')) {
    tuesdayButton.classList.add('clicked');
    numberOfDaysSelected++;
    calculate();
    }
}
tuesdayButton.addEventListener("click", tuesday);

function wednesday() {
if (!wednesdayButton.classList.contains('clicked')) {
    wednesdayButton.classList.add('clicked');
    numberOfDaysSelected++;
    calculate();
    }
}
wednesdayButton.addEventListener("click", wednesday);

function thursday() {
if (!thursdayButton.classList.contains('clicked')) {
    thursdayButton.classList.add('clicked');
    numberOfDaysSelected++;
    calculate();
    }
}
thursdayButton.addEventListener("click", thursday);

function friday() {
if (!fridayButton.classList.contains('clicked')) {
    fridayButton.classList.add('clicked');
    numberOfDaysSelected++;
    calculate();
    }
}
fridayButton.addEventListener("click", friday);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clear() {
    mondayButton.classList.remove('clicked');
    tuesdayButton.classList.remove('clicked');
    wednesdayButton.classList.remove('clicked');
    thursdayButton.classList.remove('clicked');
    fridayButton.classList.remove('clicked');
    numberOfDaysSelected = 0;
    totalCost = 0;
    calculate();
}

clearButton.addEventListener("click", clear);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function halfday() {
    costPerDay = 20;
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    calculate();
}

halfButton.addEventListener("click", halfday);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fullday() {
    costPerDay = 35;
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    calculate();
}

fullButton.addEventListener("click", fullday);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate() {
    totalCost = numberOfDaysSelected * costPerDay;
    calculatedCost.innerHTML = totalCost;
}