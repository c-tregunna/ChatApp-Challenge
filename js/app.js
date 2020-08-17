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

let nameArray = presidents.map(pres => pres.name); //(pres => pres.isOnline); //This makes an array just of the names.
console.log(nameArray);

 function randomName (nameArray) {
    return nameArray[Math.floor(Math.random()*nameArray.length)];

 }

 console.log(randomName(nameArray));

const messageBlock = document.querySelector('.message-display');
const messageInput = document.querySelector('input.addMessage');
const submitButton = document.querySelector('button.submit');

submitButton.addEventListener('click', () => {
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
  });


//This works if it is just a simple array of names
// presidents.forEach(president => { // for each president do the below
//     console.log(president.name); //logs each president to consol
//     let presidentName = document.createElement('LI'); //Create the li to add each president name to
//     presidentName.classList.add('president-list-items');// add the specific class to the li
//     presidentName.textContent = president.name; //add the individual name of each president to the li
//     presidentListOnline.appendChild(presidentName); // append the li to the ul with class presidents

// });

