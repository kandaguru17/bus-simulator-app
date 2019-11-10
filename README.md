## Bus Simulator App

A simulator app that enables the user to take control over the bus that is parked in a car park.<br/>

### Features

### PLACE

Enables the user to place the bus in the car park by specifying x-coOrd (mandatory) y-coOrd(mandatory) and the busFace(defaulted to EAST when not specified).<br/>

### MOVE

Allows the user to move the bus one unit forward.<br/>

### LEFT RIGHT

Turn the bus 90 degrees left or right in accordance to the current facing directions

### REPORT

Announces the current location of the bus including the direction it is facing.

## TEST DATA TO EXCERCISE

### TC1

PLACE 0 0 NORTH <br/>
MOVE <br/>
MOVE <br/>
MOVE<br/>
MOVE (At this point MOVE controller will be disabled) <br/>
RIGHT<br/>

REPORT The Current Position of the Bus is ( 0 , 4 , EAST ).<br/>

### TC2

PLACE 4 2 WEST <br/>
MOVE <br/>
MOVE <br/>
RIGHT <br/>
PLACE 4 4 NORTH (At this point MOVE controller will be disabled) <br/>
LEFT <br/>
MOVE <br/>
REPORT The Current Position of the Bus is ( 3 , 4 , WEST ). <br/>

### TC3

PLACE 0 0 (Default Facing Direction is set to EAST) <br/>
REPORT The Current Position of the Bus is ( 0 , 0 , EAST ). <br/>

### TC4

PLACE -1 -1 EAST (error message shown and place button disabled) <br/>

### TC5

On Application refresh all the Controllers should be disabled. <br/>

## Create-React-App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### npm install && npm start

install dependencies and Start the App
