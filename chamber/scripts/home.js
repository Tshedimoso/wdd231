const spotlightContainer = document.querySelector('#members');
const menuButton = document.querySelector('#menu');
const currentYear = new Date().getFullYear();




async function loadSpotlights() {
  const response = await fetch("data/members.json");
  const data = await response.json();

  const eligible = data.members.filter(member =>
    member.membership === "Gold" || member.membership === "Silver"
  );

  const shuffled = eligible.sort(() => 0.5 - Math.random()).slice(0, 3);

  spotlightContainer.innerHTML = "";

  shuffled.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("spotlight-card");

    card.innerHTML = `
            <h2>${member.name}</h2>
            <img src="images/${member.image}" alt="${member.name}">
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p><strong>Membership Level:</strong> ${member.membership}</p>
        `;

    spotlightContainer.appendChild(card);
  });
}

loadSpotlights();
document.getElementById("currentyear").innerHTML = `${currentYear}`;
document.getElementById("lastModified").innerHTML = `Last modified: ${document.lastModified}`;

menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
});


yearSpan.textContent = new Date().getFullYear();

const apiKey = "927a4cc3ffd9f12e2b7e590c98b1f646";
const lat = -26.21;   
const lon = 28.00;

const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(weatherURL);
    const data = await response.json();
    document.querySelector("#temp").textContent =
      Math.round(data.list[0].main.temp);

    document.querySelector("#description").textContent =
      data.list[0].weather[0].description;

    const forecastList = document.querySelector("#forecast");
    forecastList.innerHTML = "";

    const noonForecasts = data.list.filter(item =>
      item.dt_txt.includes("12:00:00")
    ).slice(0, 3);

    noonForecasts.forEach(day => {
      const li = document.createElement("li");
      li.textContent = `${new Date(day.dt_txt).toLocaleDateString()} – ${Math.round(day.main.temp)}°C`;
      forecastList.appendChild(li);
    });

  } catch (error) {
    console.error("Weather error:", error);
  }
}

document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;

getWeather();