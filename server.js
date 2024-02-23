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

// logging the api calls
const filePath = path.join(__dirname, "logs", "request.log");
const accessLogStream = fs.createWriteStream(filePath, { flags: 'a' });

app.use(morgan(':method :url :status :res[content-length] :response-time ms', { stream: accessLogStream }));
app.use(morgan(':method :url :status :res[content-length] :response-time ms'));

app.use(express.static(path.join(__dirname, 'public')));

const PORT = 5000;

// mongoDB connection
mongoose
    .connect("mongodb://127.0.0.1:27017/Gopuram")
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err));

app.use(bodyParser.json());

// Routes
const webUsers = require("./routes/webUserRoutes");
const mobileUsers = require("./routes/mobileUserRoutes");
const donationTypes = require('./routes/donationTypeRoutes');
const transactions = require('./routes/transactionsRouter');
const eventTypes = require("./routes/eventTypeRoutes");
const events = require("./routes/eventsRouter");


// End points
app.use('/api/webusers', webUsers);
app.use('/api/mobileusers', mobileUsers);
app.use('/api/donationtypes', donationTypes);
app.use('/api/transactions', transactions);
app.use('/api/eventtypes', eventTypes);
app.use('/api/events', events);

app.listen(PORT, () => console.log(`server is running on ${PORT}`));