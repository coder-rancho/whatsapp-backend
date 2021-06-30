// importing
import express from 'express'
import mongoose from 'mongoose'

// app config
const app = express();
const port = process.env.PORT || 9000;

// middleware 


// DB config 
const connection_url = process.env.CONNECTION_URL
const db_configuration = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(connection_url, db_configuration)
// ??????? --> surprise functionality


// api routes
app.get('/', (req, res) => res.status(200).send("hello"));

// listen
app.listen(port, () => console.log(`listening on localhost:${port}`));