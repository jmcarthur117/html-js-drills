// Helpful Resources:
// https://www.w3schools.com/js/js_htmldom.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

/*****************************
 * Section 1 - Personal Info *
 *****************************
 *
 * Description:
 *   Change the code below to display some (static) information
 *   when a user clicks the "Show Info" button.
 *
 * Resources:
 *   (See below for drill-specific resources)
 */
// test to add to git

function addName() {
  console.log('addName() ran');

  // See:
  // - https://www.digitalocean.com/community/tutorials/js-innertext-and-innerhtml
  // - https://www.w3schools.com/jsref/prop_node_innertext.asp

  let nameElement = document.querySelector('#name');
  nameElement.innerText = 'The Rock';
  nameElement.style.color = 'red';
}

function addFavoriteThings() {
  console.log('Called addFavoriteThings()');

  let potatoTime = document.querySelector('#favthings');
  console.log('potatoTimeIncoming');
  console.log(potatoTime);
  var listItem = document.createElement("li");   // Create a <button> element
  listItem.innerHTML = "Working Out";                   // Insert text
  potatoTime.appendChild(listItem);
  var listItem = document.createElement("li");   // Create a <button> element
  listItem.innerHTML = "Wrestling";                   // Insert text
  potatoTime.appendChild(listItem);
  var listItem = document.createElement("li");   // Create a <button> element
  listItem.innerHTML = "Acting";                   // Insert text
  potatoTime.appendChild(listItem);
  var listItem = document.createElement("li");   // Create a <button> element
  listItem.innerHTML = "B Movies";                   // Insert text
  potatoTime.appendChild(listItem);
  // Append <button> to <body>
  // 1. Get a reference to <ul id="favthings">
  // 2. Create a few list items representing your favorite things
  // 3. Add them to append them to favthings

  // See:
  //   - https://htmldog.com/guides/javascript/advanced/creatingelements/
  //   - https://www.javascripttutorial.net/javascript-dom/javascript-createelement/
  //   - https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

}

function replaceImage() {
  console.log('Called replaceImage()');

  let newImage = document.querySelector('#picture');
  newImage.src = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2016%2F11%2Fthe-rock-71.jpg";
  newImage.height = "300";
  newImage.width = "300";

  // Change the puppy picture to a picture of your choosing

  // See:
  // - https://www.tutorialrepublic.com/javascript-tutorial/javascript-dom-get-set-attributes.php
  // - https://www.w3schools.com/jsref/met_element_setattribute.asp
}

function changeCodeStatus() {
  console.log('Called changeCodeStatus()');

  let theRock = document.querySelector('#codestatus');
  console.log(theRock);
  theRock.innerHTML = '<img src="https://i.pinimg.com/originals/66/49/99/66499908eacd17e67382895735e6959c.jpg" alt="The Rock" width="300" height="300">';
  theRock.style.color = 'orange';

  // 1. Get a reference to <div id="codestatus">
  // 2. Create image element containing a sweet ol' meme
  // 3. Replace text in codestatus w/ image
}

// Get a reference to the button w/ id="show-info-button"
let showInfoButton = document.querySelector('#show-info-button');

// Do something when showInfoButton is clicke
showInfoButton.addEventListener('click', function() {
  console.log('Clicked "Show Info" button');

  // Implement addName, addFavoriteThings, replaceImage, changeCodeStatus above

  addName();
  addFavoriteThings();
  replaceImage();
  changeCodeStatus();
});

/**********************************
 * Section 2 - Reading From Forms *
 **********************************
 *
 * Description:
 *   Change the code below to populate the section on the right-hand
 *   side of the page with the data entered into the form.
 *
 */

// Get a reference to form w/ id="information-form"
let informationForm = document.querySelector('#information-form');

// Do something when form is submitted
informationForm.addEventListener('submit', function(event) {
  event.preventDefault(); // You will want this here. Remove it and see what changes.

  console.log('Form submitted');

  // Your job:
  //   1. Get information typed into the form
  //   2. Display that info in "Display that info here" section

  // Google things like:
  //   javascript form element get values
  let fname = document.getElementById('fname').value;
  let lname = document.getElementById('lname').value;
  let cars = document.getElementById('cars').value;
  let icecreamyes = document.getElementById('icecreamyes').checked;
  let human = document.getElementById('humancheck').checked;
  let coder = document.getElementById('codercheck').checked;

  document.getElementById('firstname').innerText = fname;
  document.getElementById('lastname').innerText = lname;
  document.getElementById('chosencar').innerText = cars;
  if(icecreamyes) {
    document.getElementById('icecreamstatus').innerText = 'Yes';
  }
  else {
    document.getElementById('icecreamstatus').innerText = 'No';
  }

  if(human) {
    if(coder) {
          document.getElementById('checks').innerText = 'Human, Coder';
    }
    else {
      document.getElementById('checks').innerText = 'Human';
    }
  }
  else if(coder) {
        document.getElementById('checks').innerText = 'Coder';
  }

});

/*************************************
 * Section 3 - Clicks and Keypresses *
 *************************************
 *
 * Description:
 *   Make the buttons in section 3 of index.html behave as described below.
 *
 */

// When a user clicks "Click me to log something to the console"
// then log something to the console

// Fill in ________ to get a reference to the correct button on the page
let consoleLogButton = document.querySelector('#console-log-button');

// Log something when that button is clicked
consoleLogButton.addEventListener('click', function() {

  console.log('Text Has Benn Changed');
});


let makeBlueButton = document.querySelector('#make-blue-button');
makeBlueButton.addEventListener('click', function() {
  // Your job:
  //  1. When a user clicks "Change the text to the right blue"
  //  2. Change the text in <div id="colorText">...</div> to blue

  document.getElementById("colorText").style.color = '#0000ff';
});

// Adding an event listener to document means the "keydown" event
// can happen anywhere on the page and we'll respond.
document.addEventListener('keydown', function() {
  // This is called whenever a user pressed any key.

  // Your job:
  //  1. Turn colorText red whenever a user presses the 'r' key
  //  2. Add your own keybind somewhere

  // See:
  // - https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
  // - https://javascript.info/keyboard-events

    //Changes color of colorText to red
    if(event.code == 'KeyR') {
          document.getElementById("colorText").style.color = '#ff0000';
    }
    if(event.code == "KeyG") {
          document.getElementById("colorText").style.color = '#00ff00';
    }
    if(event.code == "KeyY") {
          document.getElementById("colorText").style.color = '#ffff00';
    }
});

/*************************************
 * Section 4 - TODO List             *
 *************************************
 *
 * Description:
 *   Build a simple TODO list.
 *
 *   For this you will need to have a listener on the submit form and add
 *   anything entered into the text box to the to do list on the right side.
 *
 * Bonus:
 *   Add a delete button next to each item and allow it to delete the item
 *   it is next to.
 */

// Your code goes here

/****************************************
 * Section 5 - setInterval + setTimeout *
 ****************************************
 *
 * Description:
 *   Use the setInterval function to create a counter that counts every
 *   second on the page (Should look kind of like a stopwatch counting up).
 *   Display this in the span with the id of 'seconds'.
 *
 *   Then use the SetTimeout function to display something (your choice) to the
 *   div with the id 'delayedDisplay' after 5 seconds have passed.
 *
 * Resources:
 *   - https://javascript.info/settimeout-setinterval
 *
 */

// Your code goes here
let timer = setInterval(eachSecond, 1000);
var time = 0;
function eachSecond() {
  time ++;
  document.getElementById('seconds').innerText = time;
}

let delay = setTimeout(delayedDisplay, 10000);

function delayedDisplay() {
    document.getElementById('delayedDisplay').innerText = 'You stayed for 10 seconds.';
}

/****************************************
 * Section 6 - Your own section!        *
 ****************************************
 *
 * Description:
 *   Add your own section to this page with its own event listeners.
 *   Use a JavaScript event listener that is new to you.
 *   Here is a handy list: https://developer.mozilla.org/en-US/docs/Web/Events
 *   Click on each event listener to see an example of how it is used
 *
 */

// Your code goes here
