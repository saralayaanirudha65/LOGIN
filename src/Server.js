const express = require("express");

//rest object
const app = express();

//rest api
app.get("/", (req,res) => {
    res.send({
        message: "Welcome to sweet hub",
    });
});

//PORT
const PORT = 8080;

//run Listen
app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
});

