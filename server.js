// importing
import express from 'express'

// app config
const app = express();
const port = process.env.PORT || 9000;

// middleware 


// DB config 


// ??????? --> surprise functionality


// api routes
app.get('/', (req, res) => res.status(200).send("hello"));

// listen
app.listen(port, () => console.log(`listening on localhost:${port}`));