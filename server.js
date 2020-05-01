// require express
const express = require("express");
// setup the app
const app = express();
//setup the port
const PORT = 3000;

//Data
const reservation = [
    {
        name: "John",
        phone: "123-123",
        email: "john@email.com",
        id: 123
    }
];

const waitlist = [
    {
        name: "John",
        phone: "123-123",
        email: "john@email.com",
        id: 123
    }
];

//Routes
app.get("/api/reservations", (req, res) => {

    res.json(reservation);
});
app.get("/api/waitlist", (req, res) => {

    res.json(waitlist);
});
//setup the listener
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});


