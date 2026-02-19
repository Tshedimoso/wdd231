
document.addEventListener("DOMContentLoaded", () => {
        const currentYear = new Date().getFullYear();

        
        if (typeof loadSpotlights === "function") {
            loadSpotlights();
        }

        document.getElementById("currentyear").innerHTML = `${currentYear}`;
        document.getElementById("lastModified").innerHTML = `Last modified: ${document.lastModified}`;
    });

