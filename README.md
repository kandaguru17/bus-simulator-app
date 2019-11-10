## Bus Simulator App

A simulator app that enables the user to take control over the bus that is parked in a car park.<br/>

### Features

### PLACE

Enables the user to place the bus in the car park by specifying x-coOrd (mandatory) y-coOrd(mandatory) and the busFace(defaulted to EAST when not specified).<br/>

### MOVE

Allows the user to move the bus one unit forward.<br/>

### LEFT RIGHT

Turn the bus 90 degrees left or right to the left in accordance to the current facing directions

### REPORT

Announces the current location of the bus including the direction it is facing.

## TEST DATA TO EXCERCISE

### TC1

PLACE 0 0 NORTH
MOVE
MOVE
MOVE
MOVE (At this point MOVE controller will be disabled)
RIGHT

REPORT The Current Position of the Bus is ( 0 , 4 , EAST ).

### TC2

PLACE 4 2 WEST
MOVE
MOVE
RIGHT
PLACE 4 4 NORTH (At this point MOVE controller will be disabled)
LEFT
MOVE
REPORT The Current Position of the Bus is ( 3 , 4 , WEST ).

### TC3

PLACE 0 0 (Default Facing Direction is set to EAST)
REPORT The Current Position of the Bus is ( 0 , 0 , EAST ).

### TC4

PLACE -1 -1 EAST (error message shown and place button disabled)

### TC5

On Application refresh all the Controllers should be disabled.




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
