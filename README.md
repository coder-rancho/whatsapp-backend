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

4. #### Connect database with server.js 02:26:30 - 02:33:20
  +  **Get connection_ul**
    + create new user, give network permission to current ip
    + connect >> connect your application >> copy connection_url
  + **Connect DB to application** (require mongoose)
    + edit connection_url string
        + ~admin~ admin (or your username)
        + ~< password >~ ksdhfdehfrf (or your password)
        + ~MyFirstDatabase~ whatsappdb (or whatever name you wanna give to your db)
    + connect database using mongoose 
    after some time, mongodb cluster will show connection to your application

5. #### Define data(message content) Schema
  + Create **./dbMessages.js**
  + define `whatsappSchema` object and export
