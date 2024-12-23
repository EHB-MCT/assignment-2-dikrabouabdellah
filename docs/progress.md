# Progress on GemRec Project 06/12/2024

## 1. Backend Setup

- Set up a Node.js backend with Express.
- Connected to MongoDB Atlas.
- Created API route `/api/gemrecs` to fetch all the anime recommendations from the `GemRecs` collection.
- Created API route `/api/gemrecs/gems` to fetch only GemRec:yes from the `GemRecs` collection.

## 2. Frontend Setup

- Created basic frontend structure for the anime recommendation site.
- Implemented basic styling for the app layout.

## 3. Database

- Verified connection to MongoDB Atlas.

## 4. Folder structure

- Added folders and file to conform to the coding conventions

## 5. Git

- Added a Dev branch, a feature branch and a docs branch

## 6. Challenges

- Initially struggled with the connection URL for MongoDB but resolved it after updating the `.env` file with the correct database URI.
- Ran into some issues with routing and models, which were fixed after renaming and updating the model and routes.

## 7. Next Steps

- Work on improving the frontend to display the fetched anime recommendations.

# Progress on GemRec Project 23/12/2024

## 1. Modified the frontend and backend

- Implemented functionality where clicking on a `gemrec` card takes the user to a detailed page showing additional information (e.g., genre, aired date, summary, etc.).

## 2. grid id

- Used MongoDB Atlas to store `gemrec` data, with the `grid` field as the id.

## 3. Branching and Git Workflow

- Worked with multiple Git branches (`dev`, `docs`, `feature/one-gemrec`).

## 4. Next Steps

- Start collecting data
- Store the data
