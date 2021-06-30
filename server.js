// importing
import express from 'express'
import mongoose from 'mongoose'

// app config
const app = express();
const port = process.env.PORT || 9000;

// middleware 


// DB config 
const connection_url = 'mongodb+srv://admin:Tsbg0xOGCzV0rjCW@cluster0.po3by.mongodb.net/whatsappdb?retryWrites=true&w=majority';
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