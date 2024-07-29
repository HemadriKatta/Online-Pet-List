# Pet Listing Website

## Overview
The Pet Listing website is a React.js application that allows users to browse, search, and view details of various pets. The project follows best coding practices, including error handling, state management, ESLint, and project bundling with Webpack/Vite.

## Features
- Browse a list of pets
- View detailed information about a selected pet
- Search for pets based on animal type, location, and breed
- Fetch breeds for specific animal types
- Error handling for API calls
- Responsive design



### Components

- **PetList.jsx**: Displays a list of pets.
- **PetDetails.jsx**: Shows detailed information about a specific pet.
- **SearchForm.jsx**: A form to search for pets based on different criteria.
- **ErrorBoundary.jsx**: A component to handle and display errors gracefully.

### Pages

- **Home.jsx**: The main landing page of the application where users can search for pets.

### Services

- **api.js**: Contains functions to make API calls to fetch pet data.

### Environment Variables

- **.env**: Stored environment variables like API keys here. This file is listed in `.gitignore` to prevent sensitive information from being committed to version control.
