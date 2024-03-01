const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const bcrypt = require('bcrypt');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());

// Logging the API calls
const filePath = path.join(__dirname, "logs", "request.log");
const accessLogStream = fs.createWriteStream(filePath, { flags: 'a' });

app.use(morgan(':method :url :status :res[content-length] :response-time ms', { stream: accessLogStream }));
app.use(morgan(':method :url :status :res[content-length] :response-time ms'));

// Serve static files from the directory where images are stored
const imagePath = path.join(__dirname, '..', 'Desktop', 'GopuramImages');
app.use('/GopuramImages', express.static(imagePath));

app.use(express.static(path.join(__dirname, 'public')));

const PORT = 5000;

// MongoDB connection
mongoose
    .connect("mongodb://127.0.0.1:27017/Gopuram")
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err));

app.use(bodyParser.json());

// Test API call
const test = (req, res) => {
    res.status(200).send('Test API successful');
};
app.use('/api/test', test);

// Routes
const webUsers = require("./routes/webUserRoutes");
const mobileUsers = require("./routes/mobileUserRoutes");
const donationTypes = require('./routes/donationTypeRoutes');
const transactions = require('./routes/transactionsRouter');
const eventTypes = require("./routes/eventTypeRoutes");
const events = require("./routes/eventsRouter");
const images = require("./routes/galleryRoutes");

// Endpoints
app.use('/api/webusers', webUsers);
app.use('/api/mobileusers', mobileUsers);
app.use('/api/donationtypes', donationTypes);
app.use('/api/transactions', transactions);
app.use('/api/eventtypes', eventTypes);
app.use('/api/events', events);
app.use('/api/images', images);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
