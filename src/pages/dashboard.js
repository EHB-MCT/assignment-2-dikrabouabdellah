const API_BASE_URL = "http://localhost:5000/api/aggregate";

// Fetch data from a given endpoint
async function fetchData(endpoint) {
	try {
		const response = await fetch(`${API_BASE_URL}/${endpoint}`);
		if (!response.ok) throw new Error(`Failed to fetch data from ${endpoint}`);
		return await response.json();
	} catch (error) {
		console.error("Error fetching data:", error);
		return [];
	}
}

// Create a bar chart
function createBarChart(ctx, labels, data, title) {
	return new Chart(ctx, {
		type: "bar",
		data: {
			labels,
			datasets: [
				{
					label: title,
					data,
					backgroundColor: "rgba(75, 192, 192, 0.2)",
					borderColor: "rgba(75, 192, 192, 1)",
					borderWidth: 1,
				},
			],
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
				},
			},
		},
	});
}

// Create a pie chart
function createPieChart(ctx, labels, data, title) {
	return new Chart(ctx, {
		type: "pie",
		data: {
			labels,
			datasets: [
				{
					label: title,
					data,
					backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)"],
					borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
					borderWidth: 1,
				},
			],
		},
		options: {
			plugins: {
				legend: {
					display: true,
					position: "top",
				},
			},
		},
	});
}

// Initialize the dashboard
async function initDashboard() {
	// Page Views
	const pageViewsData = await fetchData("page-views");
	const pageLabels = pageViewsData.map((item) => item._id);
	const pageCounts = pageViewsData.map((item) => item.count);
	createBarChart(document.getElementById("pageViewsChart"), pageLabels, pageCounts, "Page Views");

	// Button Clicks
	const buttonClicksData = await fetchData("button-clicks");
	const buttonLabels = buttonClicksData.map((item) => item._id);
	const buttonCounts = buttonClicksData.map((item) => item.count);
	createBarChart(document.getElementById("buttonClicksChart"), buttonLabels, buttonCounts, "Button Clicks");

	// Scroll Depth
	const scrollDepthData = await fetchData("scroll-depth");
	const scrollLabels = scrollDepthData.map((item) => `${item._id}%`);
	const scrollCounts = scrollDepthData.map((item) => item.count);
	createPieChart(document.getElementById("scrollDepthChart"), scrollLabels, scrollCounts, "Scroll Depth");

	// Event Types
	const eventTypesData = await fetchData("event-types");
	const eventLabels = eventTypesData.map((item) => item._id);
	const eventCounts = eventTypesData.map((item) => item.count);
	createPieChart(document.getElementById("eventTypesChart"), eventLabels, eventCounts, "Event Types");
}

initDashboard();
