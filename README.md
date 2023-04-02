# YouTube Clone

A clone of the YouTube web app made using React.

## Features Implemented

- **YouTube Home**: Fetched data from YouTube's official [Data API](https://developers.google.com/youtube/v3/docs)
- **Watch Page**: Dynamically loads the video based on the selection made on homepage
- **Sidebar**: A collapsible sidebar that can be toggled using the hamburger icon and automatically collapses on the watch page
- **Search Bar**: Implemented *debouncing* to minimise the number of API calls made over the network
- **Nested Comments**
- **Live Chat**

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them.