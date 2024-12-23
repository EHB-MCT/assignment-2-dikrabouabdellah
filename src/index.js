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
		const button = document.createElement("button");
		button.className = "gemrec-card";
		button.innerText = gemRec.name;
		button.addEventListener("click", () => {
			window.location.href = `gemrec.html?grid=${gemRec.grid}`;
		});

		gemRecList.appendChild(button);
	});
}

// Initialize the app
async function init() {
	const gemRecs = await fetchGemRecs();
	renderGemRecs(gemRecs);
}

init();
