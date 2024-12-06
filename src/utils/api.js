const BASE_URL = "http://localhost:5000/api";

// Fetch all GemRecs
export const fetchGemRecs = async () => {
	try {
		const response = await fetch(`${BASE_URL}/gemrecs`);
		if (!response.ok) throw new Error("Failed to fetch data");
		return await response.json();
	} catch (error) {
		console.error("Error fetching GemRecs:", error);
		return [];
	}
};
