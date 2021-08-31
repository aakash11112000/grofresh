# GroFresh

This project was made with the MERN stack. \
As of the latest release, this project is still under development and uses the development build of React.

## Available Scripts

After cloning the project, navigate into the project directory and follow the instructions below to install dependencies and run the project.

### `npm install`

Installs all the required dependencies for the project to run. \
As this command installs React dependencies also, there is no need to navigate to the client folder and run this command there.

**MongoDB, the database for this application, is not available as a part of this installation and it is necessary to be installed.**

Kindly visit [MongoDB community server](https://www.mongodb.com/try/download/community) and download it.

### `npm start`

Runs the server and the client in tandem. By default, the server runs in port 5000 and the client runs in port 3000. 

**Before you run this command, please ensure that MongoDB is hosted in default port 27017.**

Running this command will automatically open up the application in your default web browser. 

### `npm run server`

Runs the server alone in default port 5000. This command is usually not required unless you wish to make API calls alone to the server.

### `npm run client`

**Note: running the client without running the server may lead to some parts of the client to malfunction.**

Runs the front-end React web app alone in default port 3000. 
