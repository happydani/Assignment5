////////////////////////////////////////////////////////////////
// The Calculator II (30 points)

//In this part of the assignment you will practice working with the DOM, DOM Events, Functions, and more to create a better version of the calculator that we built in a previous class. To complete this part, follow the steps outlined below:

//1.	Notice the markup that I’ve included for you in the web page. There is a text box that will display the value of each button click and 16 different buttons each of which represents a major key on a basic calculator. Begin adding an event listener to the window object that “listens” for the load event and when heard, calls a user-defined function called init().

document.addEventListener("DOMContentLoaded", init, false);
    
//2.	Create the user-defined function called init().
function init() {
    var buttons = document.getElementsByTagName('input');
    
    var result = document.getElementById('result');
    
//    var clear = document.getElementsByClassName('clear')[0];
//    console.log(clear);
    
//3.	Within the init() function, attach an event listener to each of the 16 buttons in the web page. You will listen for the click event and when heard, a function called enter() should be called for each of the buttons except for the equal sign. Since you are attaching an event listener to an object, you can pass in this.value as a parameter to each of the enter() function calls. 
    
    for (var i=0; i < buttons.length; i++) {
        //4.	For the equal button, call a function called calculate(). You will not pass any arguments into this function.
        
        if (buttons[i].value === '=') {
            buttons[i].addEventListener("click", calculate(i), false);
        }
        else {
            buttons[i].addEventListener("click", enter(buttons[i]), false);
        }
        //window.console.log(buttons);
    }
}

//5.	Create a user-defined function called enter() that accepts val as an argument.

function enter(btn_i) {
    
    //6.	Within the enter() function get the result text box by its ID and set its value plus equal to the val parameter being passed in.
    return function () {
      
      if (btn_i.value === '÷') {
         result.value  += '/';
      } else if (btn_i.value === 'x') {
         result.value  += '*';
      } else {
         result.value  += btn_i.value; 
      }
    };
} 
 

//7.	Create a user-defined function called calculate() that doesn’t accept any arguments. 

function calculate(i){  
    return function () {
        
        //8.	Within the calculate() function get the result text box by its ID and set its value equal to the calculation currently stored in the result text box. HINT: Use the built-in eval() function to perform the heavy lifting for you.
        
        result.value = eval(result.value);
    };
}


//Figure out a way to simplify your code so that you don’t have to manually attach an event handler to each and every button. You should be able to programmatically attach a listener to every button on the page and attach a handler that listens for the click without having to write so much code. 
 

//HINT: Remember the concept of “event bubbling”. Perhaps it makes more sense to listen for an event on a parent element rather than each and every button….
