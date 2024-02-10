const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());

const PORT = 5000;

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