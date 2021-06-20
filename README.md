# Housecarl Web Client

This is Carl's face. 

It is the frontend from which Carl will show you the videos he's recorded.

You can view recorded videos and delete them if you no longer want them.

Don't know Carl? Check him out [here](https://github.com/RobertMcReed/housecarl).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Requests will be proxied to port 5000, so Carl must be running the server on that port.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

**There's no need for you to run this script manually.**

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `npm run deploy`

Runs `npm run build` first and then `node scripts/copyBuild.js`.

It will copy the contents of `/build` to `../housecarl/housecarl/library/server/build`.

If `../housecarl` does not exist, the process will fail.

## Learn More

This app was bootstrapped with Create React App.

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
