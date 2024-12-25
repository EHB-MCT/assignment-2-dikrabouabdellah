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

# Progress on GemRec Project 25/12/2024

## 1. Database Schema Updates

- Added a `Tracking` model to store event types, timestamps, page views, scroll depths, and button clicks.

## 2. Backend Tracking Routes

- Implemented `/api/track` endpoint to log interaction events into the database.
- Added backend aggregation logic to count page views and button clicks.

## 3. Frontend Tracking

     - Logged events for when the homepage and detail page load.
     - Implemented scroll depth tracking on the homepage for thresholds (25%, 50%, 75%, 100%).
     - Logged button clicks on homepage GemRec cards.
     - Ensured `buttonName` was passed correctly and tracked in the backend.
     - Tracked user navigation to detail pages and included the specific `grid` of the GemRec being viewed.

## 4. Testing

- Tested backend endpoints using Postman to ensure data was saved correctly in the database.
- Verified frontend tracking via console logs and MongoDB data inspection.

## 5. Bug Fixes

- Resolved issues with tracking code, such as `buttonName` undefined error.
- Addressed the issue where detail page views were incorrectly logged as `/public/`.

## 6. GemRec cards

- Added the images back to the homepage

## Next Steps

- Add more tracking features if needed.
- Implement data visualization for aggregated data in the frontend.
- Add more styling
