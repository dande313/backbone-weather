#WHAT'S MY WEATHER
by Allen Anderson @ 2020 Spaces


##Introduction
***An introductory onboarding app, created using the primary stack of 2020, including:
-Backbone
-RequireJS
-Less
-Grunt

The application uses the following free APIs:
-Open Weather
-Google Geocoding
-Aeris weather


###Installing - TLDR; version
-Install npm.
-From the projects root directory, run these commands:

npm install http-server -g
npm install
grunt build
npm start-local

-Navigate to http://localhost:2020 


###Installing - Detailed

1. This appliation requires npm and http-server. To install npm, go to https://www.npmjs.com/get-npm and follow the instructions. If you are unsure if you have npm, enter te command "npm -v" in the command line.  Once installed, in the command line, install http-server using the command "npm install http-server -g". 
2. In the command line, navigate to the root directory, i.e. "C:/Users/../Backbone_weather".
3. Run "npm install" to fetch all the packages required for the app.
4. Run "grunt build". This takes all of the files from the "src" folder, and creates a productiom build under the "build" folder.
5. Run "npm start" This will start the application's server, pointing it to localhost:2020.
6. Navigate to localhost:2020 in your browser to run the application. For full functionality, please allow location access. 

If you wish to modify the code, edit the files in the "src" folders. These will be MUCH more readable. Once you are satisfied with the changes, rebuild the application using the "grunt build" command. If you want to run the server using the src code, you can launch a server based off of the src files directly by running "npm start-src". 


###Useage
When the app first opens, it will prompt its user to share their location. If permission is given, the application will use it's coordinates. Using those coordinates, the application will pinpoint the user's address, and display all the information within the field. If no permission is given, the empty form is displayed. The user will be unable to navigate until a location is given. Once a location is added or modified, select the "Update Coordinates" button to fetch the Latitude and Longitide coordinates. This does not need to be done for the users current location. The map will change to pinpoint the users location. If the user would like to quickly revert to their current location, and if permission was given to share their location, they can quickly revert by clicking "Find My Location".

Once a location has been pinpointed, all the other tabs will be available. "Current" will display the current weather. "Forecast" will give the weather for the next five days, including predicted min and max temperatures. "Map" will bring up the weather map for your location. The base map will be the sattelite view of your location, with the precipitation radar selected. On the top of the map, you can change the layer to display clouds, temperature, windspeed, or none. A legend will also be provided. You may also change the zoom. 1x is the most zoomed out, and 8x is the most zoomed in. Some of the layers won't show at 8x.

NOTE: This app only works for North America. It is highly unlikely to work elsewhere.

###
