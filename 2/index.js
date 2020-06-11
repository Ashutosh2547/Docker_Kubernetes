const express = require("express");

const app = new express();

app.get("/", (req, res) => {
    res.send("hi there");
});

app.listen(8081, () => {
    console.log("listening on port 8081");
})