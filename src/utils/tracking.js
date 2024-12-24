const TRACKING_API_URL = "http://localhost:5000/api/interactions";

// Function to send interaction data to the backend
export async function trackInteraction(eventType, { page, timestamp, scrollDepth }) {
	try {
		console.log("Sending interaction data:", eventType, { page, timestamp, scrollDepth });

		const response = await fetch("http://localhost:5000/api/track", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ eventType, timestamp, page, scrollDepth }), // Correctly stringify the data
		});

		if (!response.ok) {
			throw new Error("Failed to log interaction");
		}

		// Log the successful interaction
		console.log(`Interaction logged: ${eventType}`, { page, timestamp, scrollDepth });
	} catch (error) {
		console.error("Error logging interaction:", error);
	}
}
