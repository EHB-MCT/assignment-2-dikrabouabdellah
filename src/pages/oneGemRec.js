const API_URL = "http://localhost:5000/api/gemrecs";

// Get the `grid` value from the URL query parameters
function getGemRecGrid() {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get("grid");
}

// Fetch the GemRec details from the backend
async function fetchGemRecDetails(grid) {
	try {
		const response = await fetch(`${API_URL}/${grid}`);
		if (!response.ok) throw new Error("Failed to fetch GemRec details");
		return await response.json();
	} catch (error) {
		console.error("Error fetching GemRec details:", error);
		return null;
	}
}

// Render the GemRec details on the page
function renderGemRecDetails(gemRec) {
	const detailsContainer = document.getElementById("gemrec-details");

	if (!gemRec) {
		detailsContainer.innerHTML = "<p>Error loading GemRec details.</p>";
		return;
	}

	detailsContainer.innerHTML = `
        <img src="${gemRec.image}" alt="${gemRec.name}" class="gemrec-image">
        <h2 class="gemrec-title">${gemRec.name}</h2>
        <p><strong>Genre:</strong> ${gemRec.genre}</p>
        <p><strong>Aired:</strong> ${gemRec.aired}</p>
        <p><strong>Episodes:</strong> ${gemRec.episode}</p>
        <p>${gemRec.summary}</p>
        <a href="${gemRec.watch}" target="_blank" rel="noopener noreferrer">Watch Now</a>
    `;
}

// Initialize the app
async function init() {
	const gemRecGrid = getGemRecGrid();
	if (!gemRecGrid) {
		document.getElementById("gemrec-details").innerHTML = "<p>No GemRec grid provided.</p>";
		return;
	}

	const gemRec = await fetchGemRecDetails(gemRecGrid);
	renderGemRecDetails(gemRec);
}

init();
