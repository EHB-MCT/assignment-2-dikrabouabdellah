# Documentation

## Introduction

This projects aim to collect data from the users that visit the website and display it in an Analytics Dashboard. The analystics displays charts with data about the number of buttons clicked, buttons hovered and the scroll depth of the users.

## Project Overview

The project consists of two main parts: the backend and the frontend. The backend is built using Node.js and MongoDB, while the frontend uses HTML, CSS, and JavaScript with Chart.js for visualization.

- The backend handles user interaction data, stores it in the database, and provides an API to fetch the aggregated data.
- The Frontend displays the data in various types of charts, allowing users to easily understand the collected interaction data.

## Folder Structure

### Backend

The backend side of this project can be found under the folder backend. The backend contains the server.js, the model and the routes of this project. In the models folder you will find the models of a GemRec, interaction and for the tracking. In the routes folder there is the routes for tracking and for the GemRecs.

### frontend

The frontend will be the src and public folders. The public folder containt the html pages that are visible to the public? The src folders has the index.js, the assets folder, pages folders and the utils folder. Assets has the images and stylesheets, Pages the javascript files for specific pages and utils the javascript files that communicate with the backend.

## Git Conventions

I followed the [Git branching conventions](https://medium.com/@abhay.pixolo/naming-conventions-for-git-branches-a-cheatsheet-8549feca2534) and [commit message guidelines](https://www.conventionalcommits.org/en/v1.0.0/) as outlined in these resources. The naming convention used for the branches was:

- **Feature branches**: `feature/<feature-name>`
- **Documentation branches**: `docs`
- **Development branch**: `dev`
- **Main branch**: `main`

Commit messages were written in a standardized format, beginning with the type of change (e.g., `feat`, `fix`, `docs`), followed by a concise description of the change.

### **Why MongoDB?**

The decision to use MongoDB for this project was made because of its flexibility, scalability, and performance. This made MongoDB a suitable choice for storing and managing the dynamic analytics data in this project.

## **Technologies Used**

- **Frontend**:

  - HTML
  - CSS
  - JavaScript
  - Chart.js

- **Backend**:

  - Node.js
  - Express.js (for routing and handling API requests)
  - MongoDB (using MongoDB Atlas for cloud-based storage)

- **Database**:
  - Atlas MongoDB

## References

I consulted the following websites and resources while writing this code:

### For folder structure

- [Airbnb Github](https://github.com/airbnb/javascript)
- [DEV](https://dev.to/noruwa/folder-structure-for-modern-web-applications-4d11)
- [Stack Overflow](https://stackoverflow.com/questions/35807001/web-projects-folders-directories-structure-best-practices)

### Git conventions

- [Medium](https://medium.com/@abhay.pixolo/naming-conventions-for-git-branches-a-cheatsheet-8549feca2534)
- [Stack Overflow](https://stackoverflow.com/questions/26944762/when-to-use-chore-as-type-of-commit-message)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

### charts

- [Chart.js](https://www.chartjs.org/)

### Backend

- [Node.js](https://nodejs.org/en)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)

### Frontend

- [Chart.js](https://www.chartjs.org/)
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)

### ChatGPT

- [ChatGPT](https://chatgpt.com/share/676d6ec2-11dc-800e-a50a-dc37885ac0a9)

### DEV tools

- [VS Code](https://code.visualstudio.com/)
- [Postman](https://www.postman.com/)
- [GitHub](https://github.com/)

### Database

- [MongoDB](https://www.mongodb.com/)

### Other reseources

- [Stack Overflow](https://stackoverflow.com/)
- [W3 schools](https://www.w3schools.com/)
