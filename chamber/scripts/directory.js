const membersContainer = document.querySelector('#members');
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const menuButton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');
const currentYear = new Date().getFullYear();


menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
});

document.getElementById("currentyear").innerHTML = `${currentYear}`;
document.getElementById("lastModified").innerHTML = `Last modified: ${document.lastModified}`;

async function getMembers() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayMembers(data.members);
}

function displayMembers(members) {
    membersContainer.innerHTML = '';
    members.forEach(member => {
        const card = document.createElement('section');
        card.classList.add('member-card');

        card.innerHTML = `
            <h2>${member.name}</h2>
            <img src="images/${member.image}" alt="${member.name}">
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p><strong>Membership Level:</strong> ${member.membership}</p>
        `;

        membersContainer.appendChild(card);
    });
}

gridButton.addEventListener('click', () => {
    membersContainer.classList.add('grid');
    membersContainer.classList.remove('list');
});

listButton.addEventListener('click', () => {
    membersContainer.classList.add('list');
    membersContainer.classList.remove('grid');
});

getMembers();
