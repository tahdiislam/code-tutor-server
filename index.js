const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.port || 5000;

app.use(cors())

// courses data 
const courses = require("./data/courses.json")

app.get("/", (req, res) => {
    res.send("code tutor server is running")
})

app.get("/courses", (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log(`Code Tutor server running on port ${port}`);
})