import { trackInteraction } from "./../src/utils/tracking.js";
const API_URL = "http://localhost:5000/api/gemrecs";

// Track when the page has fully loaded
window.onload = async () => {
	await trackInteraction("page-view", {
		page: window.location.pathname,
		timestamp: new Date().toISOString(),
	});
};

// Track scroll depth and send data to the backend
let lastScrollDepth = 0;

window.addEventListener("scroll", async () => {
	const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
	const scrollDepth = Math.floor((window.scrollY / totalHeight) * 100);

	// Only send data when the user scrolls past certain thresholds (e.g., 25%, 50%, 75%, 100%)
	if (scrollDepth !== lastScrollDepth && (scrollDepth === 25 || scrollDepth === 50 || scrollDepth === 75 || scrollDepth === 100)) {
		await trackInteraction("scroll-depth", {
			scrollDepth,
			page: "homepage",
			timestamp: new Date().toISOString(),
		});
		lastScrollDepth = scrollDepth;
	}
});

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

		// event listener to track interaction and navigate
		button.addEventListener("click", () => {
			// Log interaction
			trackInteraction("click", {
				grid: gemRec.grid,
				page: "/index.html",
				timestamp: new Date().toISOString(),
				buttonName: gemRec.name,
			});

			// Redirect to the details page
			window.location.href = `gemrec.html?grid=${gemRec.grid}`;
		});

		// event listener to track hovering
		button.addEventListener("mouseenter", () => {
			// Track hover interaction
			trackInteraction("hover", {
				page: "homepage",
				timestamp: new Date().toISOString(),
				buttonName: gemRec.name,
			});
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

		button.appendChild(img);
		button.appendChild(title);
		gemRecList.appendChild(button);
	});
}

// Initialize the app
async function init() {
	const gemRecs = await fetchGemRecs();
	renderGemRecs(gemRecs);
}

init();
