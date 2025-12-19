This app, Movie Explorer, is a dynamic web application built with React that allows users to search for, browse, and save their favorite films. It leverages a real-time connection to the OMDb API to provide an interactive experience for movie enthusiasts.

Here is a breakdown of what the app does and the technology behind it:

Core Features

1. Live Movie Search: Users can type any movie title into a search bar to fetch instant results including posters, titles, and release years.
2. Trending/Popular View: By default, the app showcases a curated list of movies (currently set to "Batman" or "Action") to ensure the landing page is never empty.
3. Favorites System: Users can click a "heart" or "favorite" button on any movie card. These movies are saved to a dedicated "Favorites" page.
4. Persistent Data: The app uses a Context Provider (MovieContext) to manage global state, ensuring that your favorites list remains consistent as you navigate between different pages.

Technical Stack

Frontend: Built with React.js and Vite for a fast, modern development experience.
Routing: Uses React Router DOM to handle navigation between the Home and Favorites pages without reloading the browser.
API Integration: Communicates with the OMDb API using asynchronous fetch requests to retrieve movie metadata.
State Management: Utilizes the React Context API to share "Favorite" data across the entire component tree without "prop drilling."
Deployment: Optimized for hosting on platforms like GitHub Pages or Netlify, using specialized configurations for Single Page Applications (SPAs).

App Architecture

The project is structured into three main layers:
1. Components: Small, reusable UI pieces like the NavBar and MovieCard.
2. Pages: The main views of the application (Home.jsx and Favorites.jsx).
3. Services/Context: The logic layer (api.js) that handles data fetching and the global storage (MovieContext.jsx) that remembers which movies you liked
