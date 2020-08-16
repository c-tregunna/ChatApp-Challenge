const presidents = [
    'JFK',
    'Barack Obama',
    'Twat Face',
    'Richard Nixon'
];

const presidentList = document.querySelector('.presidents');

presidents.forEach(element => {
    console.log(element);
    let presidentName = document.createElement('LI');
    presidentName.classList.add('president-list-items');
    presidentName.textContent = element;
    presidentList.appendChild(presidentName);

});

