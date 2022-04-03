# April 2, 2022 Saturday Test

Tasks:

- Implement Continuous scroll view or Growbale List or Table View (using Pagination) as you see in Instagram or Facebook Feeds. (LIST IMAGES API)
  - Use download_url Key for Cell Item Thumbnail
  - Show Both Image and Author Name
  - Wherever user stops for more than 5 seconds in last 2 cell item of the list, Write "I am the chosen one" + "Value of ID" underneath Author Name
- Click on Detailed view of Image and show it In Another screen (DETAILED API)\*
  - Step 1: Open Detail view opens right away with download_Url value received from List Image
  - Step 2: Call Detailed API and Replace placeholder image with url key image (Only after calling Detailed API, not from List Images API)
- Click back to Go back on List screen

## Setup

Use the package manager [npm](https://docs.npmjs.com/) to install.

```bash
npm i && npm start
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

## Features

- Infinity scroll view for images.
- Detail image view.

## Technology

- React
- Other library:
  - Axios: Axios is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser
