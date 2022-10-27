const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.port || 5000;

app.use(cors())

// courses data 
const courses = require("./data/courses.json")

// blogs data 
const blogs = require("./data/blogs.json")

app.get("/", (req, res) => {
    res.send("code tutor server is running")
})

app.get("/courses", (req, res) => {
    res.send(courses)
})

app.get("/course/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const selectedCourse = courses.find(course => course.id === id)
    res.send(selectedCourse)
})

app.get("/blogs", (req, res) => {
    res.send(blogs)
})

app.listen(port, () => {
    console.log(`Code Tutor server running on port ${port}`);
})