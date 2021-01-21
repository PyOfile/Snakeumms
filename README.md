#
#
# SNAKE GAME
#
## Description:
This is just a fun snake game to learn from! I am insterested in socket.io as well as learning some basics for retro game dev. Perhaps progressing the build to a pwa and then some. Im using yarn for my package manager, lighthouse to test for future pwa stats, live-server node version to run my dev server(use 'npx live-server' to avoid node on this build). 
#
# Available Scripts
## git pull 
### 
```
yarn p1
```
## git push
### 
```
yarn p2
```
They are simply bash scripts I wrote to push or pull for git. I made them scripts on my machine so I can use them for other builds. All other git commands I just type.
#
## Runs the front and back end
### 
```
yarn dev
```
## Runs the frontend
### 
```
yarn cli
```
## Runs the backend
### 
```
yarn serv
```
Launches live-server for the frontend and nodemon for the backend that uses socket.io. Using concurrently to run them at the same time. To add use commands bellow.
```
cd frontend && yarn add live-server -D
```
```
yarn add nodemon concurrently -D
```
```
yarn add socket.io
```
Or just add a package.json with it inside dev dependencies and install node_modules. More info is at the bottom to modify the script in the package.json to add custom touches to your test.
#
## Install node_modules
###
```
yarn build
```
Installs the node_modules for the front and back end. This is built into yarn package manager but here I need to install to the front and back end. You can use it to reinstall as well as update your packages. Just update the package versions numbers being careful about breaking changes. Then just run the command. All of the package.json packages listed will be up to date.
#
## Remove node_modules
### 
```
yarn burn
```
Deletes node_modules. I wrote a sudo rm -r script and put it in the script section of the package.json.
#
## Run Lighthouse
### 
```
yarn light
```
Launches lighthouse node module. To add use command bellow.
```
yarn global add lighthouse
```
You can use it with the plugin on firefox. I know it is built into devtools on Chrome/Chromium but the node_module version works pretty fast.
#
#
# Yarn Dev Mods:
## Command line parameters:

   1. --port=NUMBER - select port to use (can also be done with PORT environment variable)
   2. --no-browser - suppress automatic web browser launching
   3. --quiet - suppress logging
   4. --open=PATH - launch browser to PATH instead of server root
   5. --ignore=PATH - comma-separated string of paths to ignore
   6. --entry-file=PATH - serve this file in place of missing files (useful for single page apps)
   7. --wait=MILLISECONDS - wait for all changes, before reloading

## Usage from node:
###
```
var liveServer = require("live-server");
 
var params = {
    port: 8181, // Set the server port. Defaults to 8080.
    host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0.
    root: "/public", // Set root directory that's being server. Defaults to cwd.
    open: false, // When false, it won't load your browser by default.
    ignore: 'scss,my/templates', // comma-separated string for paths to ignore
    file: "index.html", // When set, serve this file for every 404 (useful for single-page applications)
    wait: 1000 // Waits for all changes, before reloading. Defaults to 0 sec.
};
liveServer.start(params);
```