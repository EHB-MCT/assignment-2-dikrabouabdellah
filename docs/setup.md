# Setup Guide

This guide will walk you through the setup process for this project, including both the backend and frontend components. Follow these steps to get the project running on your local machine.

## Prerequisites

Before setting up the project, make sure you have the following software installed on your machine:

- Node.js
- MongoDB (Required for the backend data storage)
- Chart.js

### Installing Node.js

You can download and install Node.js from the official website:  
[https://nodejs.org/en/]

### Installing MongoDB

Follow the instructions:  
[https://www.mongodb.com/try/download/community]

### Installing Chart.js

The instructions to getting started with chart.js:
[https://www.chartjs.org/docs/latest/getting-started/]

## Backend Setup

The backend of the project is built using **Node.js** and **MongoDB**. It provides an API for tracking and fetching analytics data.

### 1. Clone the Repository

Clone the repository from your version control (e.g., GitHub):

### 2. Install Dependencies

Navigate to the backend project directory and run the following command to install required dependencies:

npm install

### 3. Start the Server

Run the following command to start the server:

cd backend
node server.js

The server will start on `http://localhost:5000` by default.

## Frontend Setup

The frontend is built with **HTML**, **CSS**, **JavaScript**, and **Chart.js** to visualize the analytics data.

### 1. Start the Frontend

Since the frontend is a static site, you can serve it using a simple web server like **Live Server** in VS Code:

## Testing the Project

Now that both the backend and frontend are set up, you can run the entire application and test it.

To test the project, follow these steps:

1. Open the website and interact with the elements that trigger the analytics (e.g., page views, button clicks, scrolls, etc.).
2. Check the analytics dashboard and refresh the data to see any changes.

You can also manually test the API by calling the following endpoints:

- Button Clicks: `http://localhost:5000//api/aggregate/button-clicks`
- Scroll Depth: `http://localhost:5000//api/aggregate/scroll-depth`
- Button Hover: `http://localhost:5000//api/aggregate/button-hovers`
