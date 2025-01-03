const API_BASE_URL = "http://localhost:5000/api/aggregate";

// Store references to charts to clear them later
let buttonClicksChart, scrollDepthChart, buttonHoversChart;

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
					backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(137, 75, 192, 0.2)"],
					borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgb(118, 75, 192)"],
					borderWidth: 1,
				},
			],
		},
		options: {
			plugins: {
				legend: {
					display: true,
					position: "top",
					labels: {
						font: {
							size: 14, // Adjust the font size if needed
						},
						padding: 20,
					},
				},
			},
			layout: {
				padding: {
					top: 20,
					bottom: 50,
					left: 50,
					right: 50,
				},
			},
			responsive: true,
			maintainAspectRatio: false,
		},
	});
}

// Initialize the dashboard
async function initDashboard() {
	// Fetch Button Clicks data
	const buttonClicksData = await fetchData("button-clicks");
	const buttonLabels = buttonClicksData.map((item) => item._id);
	const buttonCounts = buttonClicksData.map((item) => item.count);

	// If the chart already exists, destroy it before creating a new one
	if (buttonClicksChart) buttonClicksChart.destroy();
	buttonClicksChart = createBarChart(document.getElementById("buttonClicksChart"), buttonLabels, buttonCounts, "Button Clicks");

	// Fetch Scroll Depth data
	const scrollDepthData = await fetchData("scroll-depth");
	const scrollLabels = scrollDepthData.map((item) => `${item._id}%`);
	const scrollCounts = scrollDepthData.map((item) => item.count);

	// If the chart already exists, destroy it before creating a new one
	if (scrollDepthChart) scrollDepthChart.destroy();
	scrollDepthChart = createPieChart(document.getElementById("scrollDepthChart"), scrollLabels, scrollCounts, "Scroll Depth");

	// Fetch Event Types data
	const buttonHoversData = await fetchData("button-hovers");
	const hoverLabels = buttonHoversData.map((item) => item._id);
	const hoverCounts = buttonHoversData.map((item) => item.count);

	// If the chart already exists, destroy it before creating a new one
	if (buttonHoversChart) buttonHoversChart.destroy();
	buttonHoversChart = createBarChart(document.getElementById("buttonHoversChart"), hoverLabels, hoverCounts, "Hover Counts");
}

// Set up the refresh button to reload the data (without reloading the page)
document.getElementById("refresh-btn").addEventListener("click", function () {
	initDashboard(); // Re-initialize and fetch new data for the charts
});

// Initialize the dashboard when the page is loaded
initDashboard();
