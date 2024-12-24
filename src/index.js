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
		button.addEventListener("click", () => {
			window.location.href = `gemrec.html?grid=${gemRec.grid}`;
		});

		// Add the image inside the button
		const img = document.createElement("img");
		img.src = gemRec.image;
		img.alt = gemRec.name;
		img.className = "gemrec-image";

		// Add the title inside the button
		const title = document.createElement("span");
		title.className = "gemrec-title";
		title.innerText = gemRec.name;

		// Append the image and title to the button
		button.appendChild(img);
		button.appendChild(title);

		// Append the button to the list
		gemRecList.appendChild(button);

		gemRecList.appendChild(button);
	});
}

// Initialize the app
async function init() {
	const gemRecs = await fetchGemRecs();
	renderGemRecs(gemRecs);
}

init();
