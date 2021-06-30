Note : This repo is a continuation of [coder-rancho/whatsapp-mern](https://github.com/coder-rancho/whatsapp-mern) repo

## Backend 

1. #### Setup environment 
    + `git init` && setup remote(github) repo.
    + `npm init` (default options)
    + Edit package.json
        + `"main": "server.js"` 
        + within `scripts` object, add a property `"start": "node server.js"` (required to start application on hostinger )

2. #### Create mongoDB database
    + `npm i express mongoose`
    + sign-up for mongodb
    + create new project *mongodb-mern-backend* 02:04:30 - 02:06:30

3. #### Setup server.js
    + Inside **./package.json**, add `"type": "module"` (allow us to use ES6 features like import in our node application)
    + Inside **./server.js**
        + Plan project layout
        + build a basic test application
        + run using `npm start` or `nodemon server.js` (you can check it using postman also)