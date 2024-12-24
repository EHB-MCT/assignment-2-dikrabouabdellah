const TRACKING_API_URL = "http://localhost:5000/api/interactions";

// Function to send interaction data to the backend
export async function trackInteraction(data) {
	try {
		const response = await fetch(TRACKING_API_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error("Failed to log interaction");
		}

		console.log("Interaction logged:", data);
	} catch (error) {
		console.error("Error logging interaction:", error);
	}
}
