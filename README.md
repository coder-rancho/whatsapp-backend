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

5. #### Define data(message content) Schema (require mongoose)
  + Create **./dbMessages.js**
  + define `whatsappSchema` object and export

***
<div >
    <strong>Edit connection_url</strong><br>
    <ul>
        <li>connenction url is wrong, it'll give 'Error 505' for any operation on DB</li>
        <li><a href="https://stackoverflow.com/questions/58617287/unhandledpromiserejectionwarning-mongoerror-w-has-to-be-a-number-or-a-string-a">See stackoverflow's answer</a></li>
    </ul>
    Note: your connection url is in .env file, edit it there.
</div>
***

6. #### write database APIs in server.js (require mongoose)
  + write app.post('/messages/new', callBack) (require './dbMessages.js')
      + receive data into server (sent via postman >> POST >> raw >> json)
      + insert into database using `model.create()` method of mongoose
      + require `express.json()` middleware to parse data(in json)
        + `req.body` contain data as javaScript object
  + write app.get('/messages/sync', callback)
      + receive data from DB using `model.find()` method of mongoose
      + send to application (if no err)

7. #### Incorporate [Pusher](www.pusher.com "Make mongoDB realtime") 2:50:00 - 2:57:50 (require pusher)
  > Pusher acts like a middleware btw mongoDB and our application. It basically enables a two way communication that means any change in DB will trigger the application and vice versa.
  + pusher.com >> signup >> channels >> choose options >> copy code >> paste in app.config
  + **create change stream** 2:59:13 - 3:03:00
  + test using postman (get/post request)
  + trigger pusher on changeStream 
      + see changes on pusher.com >> whatsapp-mern >> Debug console
  
  8. #### add setHeader middleware
    + Do not add this in production app (security risk)