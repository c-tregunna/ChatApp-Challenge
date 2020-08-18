/****************
 * President names added to the aside section of site
 */

const presidentListOnline = document.querySelector('.p-online'); //ul with class presidents
const presidentListIdle = document.querySelector('.p-idle');
const presidentListAway= document.querySelector('.p-away');

presidents.forEach(president => {
    let presidentName = document.createElement('LI'); //Create the li to add each president name to
    presidentName.classList.add('president-list-items');// add the specific class to the li
    presidentName.textContent = president.name; //add the individual name of each president to the li
    if(president.isOnline) {
        presidentListOnline.appendChild(presidentName); // append the li to the ul with class presidents
    } else if (president.isIdle) {
        presidentListIdle.appendChild(presidentName); // append the li to the ul with class presidents
    } else {
        presidentListAway.appendChild(presidentName); // append the li to the ul with class presidents
    }

});

/********************
 * Append a message to the main section
 * need to find names of presidents who are only marked as online, as these should be who is commenting
 */


 /*
//Dustin Solution
const onlinePresidents = []; //create an empty array
presidents.forEach((pres) => { //loop through the presidents array
   if (pres.isOnline) {  // check if isOnline = true
      onlinePresidents.push(pres); // push this to the onlinePresidents array
    }
});

console.log(onlinePresidents);

let nameArray = onlinePresidents.map(pres => pres.name);  //This makes an array just of the names from the above if statment.
console.log(nameArray);

 function randomName (nameArray) { //randomly pick a name from the nameArray
    return nameArray[Math.floor(Math.random()*nameArray.length)];

 }
 */

//Jamie solution
let namesArray = presidents.filter( (president => president.isOnline !== false)); //filter throough the president array to check if isOnline is NOT false and create an array of these objects where the inOnline is true

let nameArray = namesArray.map(pres => pres.name);  //This makes an array just of the names from the above array
console.log(nameArray);

function randomName (nameArray) { //randomly pick a name from the nameArray
    return nameArray[Math.floor(Math.random()*nameArray.length)];

 }

 console.log(randomName(nameArray));


const messageBlock = document.querySelector('.message-display');
const messageInput = document.querySelector('input.addMessage');
const submitButton = document.querySelector('button.submit');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(messageInput.value === "") {
        alert("Don't forget your message");
    } else {
    let message = document.createElement("DIV");
    message.classList.add('message');
    let text = document.createElement('P');
    let span = document.createElement('SPAN');
    text.textContent = messageInput.value;
    span.textContent = `from ${randomName(nameArray)}`;
    text.appendChild(span);
    message.appendChild(text);
    messageInput.value = '';
    messageBlock.appendChild(message);
    }
  });

  /**
   * Set online, offline, busy options
   */

  const offLine = document.querySelector('.online');
  const offLineLi = document.querySelector('.offline-li');
  const busyLi = document.querySelector('.busy-li');
  const onlineLi = document.querySelector('.online-li');
  const onlineLi2 = document.querySelector('.online-li2');
  const isOnline = document.querySelector('.is-online');

  offLineLi.addEventListener('click', e => {
    onlineLi.textContent = "Offline";
    isOnline.style.backgroundColor = "#cfd8d4";
})

  busyLi.addEventListener('click', e => {
    onlineLi.textContent = "Busy";
    isOnline.style.backgroundColor = "#ff8a8a";

})
onlineLi2.addEventListener('click', e => {
    onlineLi.textContent = "Online";
    isOnline.style.backgroundColor = "#94f6d3";
})

  offLine.addEventListener('mouseenter', e => {
      const onlineList = document.querySelector('#offline');
      onlineList.classList.toggle('hidden');
  })

  offLine.addEventListener('mouseleave', e => {
    const onlineList = document.querySelector('#offline');
    onlineList.classList.toggle('hidden');
})


//This works if it is just a simple array of names
// presidents.forEach(president => { // for each president do the below
//     console.log(president.name); //logs each president to consol
//     let presidentName = document.createElement('LI'); //Create the li to add each president name to
//     presidentName.classList.add('president-list-items');// add the specific class to the li
//     presidentName.textContent = president.name; //add the individual name of each president to the li
//     presidentListOnline.appendChild(presidentName); // append the li to the ul with class presidents

// });

