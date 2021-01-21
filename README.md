# SNAKE GAME

## Description:
This is just a fun snake game to learn from!


## Available Scripts

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

## start

### 
```
yarn dev
```

## install node

###
```
yarn
```

## remove node

### 
```
yarn nn
```

## run lighthouse

### 
```
yarn light
```

# Commmand breakdown

## yarn p1 & p2
They are simply bash scripts I wrote to push or pull for git. All ofther git commands I just type.

## yarn dev
Launches live-server for development
```
yarn add live-server -D
```
Or just add it to your projects package.json dev dependencies.

## yarn
Installs the node_modules

## yarn nn
Deletes node_modules

## yarn light
Launches lighthouse node module
```
yarn global add lighthouse
```
You can use it with the plugin on firefox.


## yarn dev mods
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
```# Snakeumms
