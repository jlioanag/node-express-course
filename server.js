// Allow access to express in node_modules
const express = require('express');
// Constructs express library
const app = express();

app.listen(8000, function() {
    console.log("server is running")
})