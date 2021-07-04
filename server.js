// importing
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Messages from './dbMessages.js'
import Pusher from 'pusher'


// app config
dotenv.config();
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1229251",
    key: "263306ff9a8df1dfa5ed",
    secret: "94b1f398f5552d32d090",
    cluster: "ap2",
    useTLS: true
  });

// middleware 
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.serHeader("Access-Control-Allow-Headers", "*");
    next();
})

// DB config 
const connection_url = process.env.CONNECTION_URL
const db_configuration = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(connection_url, db_configuration)

const db = mongoose.connection;

db.once('open', () => {
    console.log('DB is connected');

    const msgCollection = db.collection('messagecontents')
    const changeStream = msgCollection.watch()

    changeStream.on('change', (change) => {
        console.log('a change occurred in changeStream');

        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted',
            {
                name: messageDetails.name,
                messages: messageDetails.message
            });
        } else {
            console.log("Error triggering Pusher")
        }
    });
})



// api routes
app.get('/', (req, res) => res.status(200).send("hello"));

app.get('/messages/sync', (req, res) => {
    console.log('received get request')
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})


// listen
app.listen(port, () => console.log(`listening on localhost:${port}`));