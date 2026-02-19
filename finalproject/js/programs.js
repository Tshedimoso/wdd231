import { setupMenu } from "./menu.js";
import { setupModal } from "./modal.js";
import { savePreference, getPreference } from "./storage.js";

setupMenu();

const container = document.querySelector("#programContainer");
const modal = document.querySelector("#programModal");

async function loadPrograms() {
    try {
        const response = await fetch("./data/programs.json");
        const data = await response.json();

        const savedCategory = getPreference("category") || "All";

        const filtered = savedCategory === "All"
            ? data
            : data.filter(item => item.category === savedCategory);

        filtered.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <h2>${item.title}</h2>
                <p><strong>Category:</strong> ${item.category}</p>
                <p><strong>Location:</strong> ${item.location}</p>
                <p><strong>Participants:</strong> ${item.participants}</p>
                <button data-id="${item.id}">View Details</button>
            `;
            container.appendChild(card);
        });

        document.querySelectorAll("button[data-id]").forEach(btn => {
            btn.addEventListener("click", () => {
                setupModal(modal, btn.dataset.id);
            });
        });

    } catch (error) {
        container.innerHTML = "<p>Error loading programs.</p>";
        console.error(error);
    }
}

loadPrograms();
