const API_URL = "http://localhost:5000/api/gemrecs";

// Fetch GemRecs from the backend
async function fetchGemRecs() {
	try {
		const response = await fetch(API_URL);
		if (!response.ok) throw new Error("Failed to fetch GemRecs");
		return await response.json();
	} catch (error) {
		console.error("Error fetching GemRecs:", error);
		return [];
	}
}

// Render GemRecs to the page
function renderGemRecs(gemRecs) {
	const gemRecList = document.getElementById("gemrec-list");
	gemRecList.innerHTML = ""; // Clear existing content

	if (gemRecs.length === 0) {
		gemRecList.innerHTML = "<p>No recommendations available.</p>";
		return;
	}

	gemRecs.forEach((gemRec) => {
		const card = document.createElement("div");
		card.className = "gemrec-card";

		card.innerHTML = `
            <img src="${gemRec.image}" alt="${gemRec.name}">
            <h2>${gemRec.name}</h2>
            <p><strong>Genre:</strong> ${gemRec.genre}</p>
            <p><strong>Aired:</strong> ${gemRec.aired}</p>
            <p><strong>Episodes:</strong> ${gemRec.episode}</p>
            <p>${gemRec.summary}</p>
            <a href="${gemRec.watch}" target="_blank" rel="noopener noreferrer">Watch Now</a>
        `;

		gemRecList.appendChild(card);
	});
}

// Initialize the app
async function init() {
	const gemRecs = await fetchGemRecs();
	renderGemRecs(gemRecs);
}

init();
