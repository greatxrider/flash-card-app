# Flash Card App

A simple flash card application built with Node.js and Express.

## Description

This application allows users to view flash cards. It includes routes for the main page, about page, and projects page. The app uses Pug as the template engine and serves static files from the `public` directory.

## Features

- **Main Page**: Displays the main content of the flash card app.
- **About Page**: Provides information about the app.
- **Projects Page**: Lists various projects.

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/flash-card-app.git
    ```
2. **Navigate to the project directory**:
    ```sh
    cd flash-card-app
    ```
3. **Install the dependencies**:
    ```sh
    npm install
    ```

## Usage

1. **Start the server**:
    ```sh
    npm start
    ```
2. **Open your browser** and navigate to `http://localhost:3000`.

## Project Structure

- **`app.js`**: Main application file that sets up the server, middleware, and routes.
- **`routes/`**: Contains route handlers for different parts of the app.
  - **`index.js`**: Main router.
  - **`about.js`**: Router for the about page.
  - **`projects.js`**: Router for the projects page.
- **`views/`**: Contains Pug templates for rendering HTML.
- **`public/`**: Directory for static files (CSS, JavaScript, images).
- **`data/`**: Contains JSON data used by the app.

## Middleware

The app uses the following middleware:

- **`morgan`**: Logger middleware for logging HTTP requests.
- **`cookie-parser`**: Middleware for parsing cookies.
- **`body-parser`**: Middleware for parsing JSON and URL-encoded request bodies.

## Routes

- **`/`**: Main page route handled by `index.js`.
- **`/about`**: About page route handled by `about.js`.
- **`/projects`**: Projects page route handled by `projects.js`.

## Error Handling

The app includes error handling middleware to catch 404 errors and other server errors:

- **404 Error**: If a route is not found, a 404 error is forwarded to the error handler.
- **Error Handler**: Renders an error page with the error message and stack trace (in development mode).

## Environment Variables

- **`PORT`**: The port on which the server runs. Defaults to `3000` if not specified.

## License

This project is licensed under the MIT License.