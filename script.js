

//function prompting user to enter name
function myFunction() {
    let person = prompt("Please enter your name");
    if (person != null) {
      document.getElementById("Name").innerHTML =
        "Hello " + person + "! Are you ready?";
    }
  }
  //function prompting user to enter phone number
  function phoneFunction() {
    let phone = prompt("Please ener your phone number");
    if (phone != null) {
      document.getElementById("phonenum").innerHTML = phone;
    }
  }
  //function prompting user to enter address
  function addressFunction() {
    let address = prompt("Please enter your address");
    if (address != null) {
      document.getElementById("address").innerHTML = address + " go";
    }
  }
  //naming variable to get today's date
  const d = new Date();
  let text = d.toDateString();
  //put today's date into html paragraph id = expire
  document.getElementById("expire").innerHTML = "Valid only: " + text  
    //array switch listing daily deals
  switch (new Date().getDay()) {
    case 0:
      day = "Buy one get pizza get one half off.";
      break;
    case 1:
      day = "No coupon, we are closed.";
      break;
    case 2:
      day = "5% off your entire Purchase.";
      break;
    case 3:
      day = "5% off your entire Purchase.";
      break;
    case 4:
      day = "10% off your entire Purchase.";
      break;
    case 5:
      day = "Free beverage with the purchase of a beverage of equal or lesser value.";
      break;
    case  6:
      day = "Free beverage with the purchase of a beverage of equal or lesser value.";
  }
  //array values placed in html
  document.getElementById("deal").innerHTML = day; 
  //prompts to enter information to be added to coupon 
  function lastName() {
  var person = prompt("Please enter your name.");
  let lname = prompt("Please enter your last name.");
  var address = prompt("please enter your street address.");
  var city = prompt("please enter your city.");
  var state = prompt("please enter your state.");
  var zip = prompt("please enter your zip.");
  var phone = prompt("please enter your phonenumber as (xxx)xxx-xxxx.");
  var email = prompt("please enter your email as name@example.com.");
//putting prompted info into html
  if (lname != null) {
    document.getElementById("lastname").innerHTML =
      person + " " + lname + "<br>" +  address+  "<br>" + city + " "  + state +  "<br>" + zip +  "<br>" + phone + "<br>" +  email;
  }
//making nacho button visible on Tuesday
  let d = new Date();
let day = d.getDay();
if (day == 2) {
  document.getElementById("theBnt").style.visibility = "visible";
}
  }
  //user is prompted to enter number 1-1000.  
function myNumber() {
  let myNumber = prompt("Please enter a number between 1 and 1000");
  //user number is placed in html
  if (myNumber != null) {
    document.getElementById("number").innerHTML =
      " The number you entered is " + myNumber;
  }
//using math.floor and math.random() to generate number 1 - 1000
  document.getElementById("winnernumber").innerHTML =
    "The winning number is " + Math.floor(Math.random() * 1001);
 //number values are compared and corresponding message generated in html   
    let greeting;
  if (winnernumber != myNumber) {
    greeting = "Sorry! Try Again next week for free nachos!";
  } else {
    greeting = "Wahoo!  You won free Nachos!!!";
  }
  document.getElementById("message").innerHTML = greeting;
}




