const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://agn36:An@07473984@musicrec-d5le5.gcp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
	console.log("MongoDB database connecton established successfully!");
})

const reclistRouter = require('./routes/reclist');

app.use('/reclist', reclistRouter);


app.listen(port, () => {
	console.log("Server is running on port: ${port}");
});